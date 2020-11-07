import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import mailer from "../controller/sendResetPasswordEmail";
import bcrypt from "bcrypt";
require("dotenv").config();
import { getUserByEmail, updatePassword } from "./queries";
import { Row } from "postgres";

// send reset password link to user after confirming their status
export const changePassword = async (req: Request, res: Response) => {
  const email = req.body.email;

  try {
    const user: Row = await getUserByEmail(email);

    if (user == null) {
      return res.status(400).json({ maessage: "No user with that email" });
    }
    const token = jwt.sign(
      { id: user.id },
      `${process.env.RESET_PASSWORD_KEY}`,
      { expiresIn: "15m" },
    );

    const html = `<h3>Please, click on this link to reset your password</h3>
                      <p>http://localhost:3000/apiv1/resetpassword/reset/${token}</p>`;

    const result = await mailer(email, html);

    if (result === -1) {
      return res
        .status(500)
        .json({ message: "email for reset password not sent" });
    }
    return res
      .status(200)
      .json({ message: "reset password link sent successfully..." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//receives and reset user password after verifying token
export const resetPassword = async (req: Request, res: Response) => {
  const resetLink = req.params.id;
  if (
    req.body.newPassword !== req.body.confirmNewPassword ||
    req.body.newPassword.length < 3
  ) {
    res.status(400).json({
      message: "password does not match or password less than 3 characters",
    });
  }

  try {
    const verify: any = jwt.verify(
      resetLink,
      `${process.env.RESET_PASSWORD_KEY}`,
    );
    console.log(verify);
    const hashpassword = await bcrypt.hash(req.body.newPassword, 10);
    console.log(hashpassword);
    const result = await updatePassword(hashpassword, verify.id);
    if (!result) {
      return res.status(500).json({ message: "unable to reset password" });
    }
    return res.json({ message: verify, success: "password reset successful" });
  } catch (error) {
    return res.status(400).json({ message: "invalid or expired token" });
  }
  return;
};