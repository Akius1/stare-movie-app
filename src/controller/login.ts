import { Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  passport.authenticate("local", function (err, user, info): any {
    if (err !== null) {
      return res.status(500).json({ err });
    }
    try {
      if (user) {
        const access_token = jwt.sign(
          user,
          `${process.env.ACCESS_TOKEN_SECRET}`,
          { expiresIn: "10m" },
        );
        res.cookie("userData", access_token);
        return res.status(200).json({
          accessToken: access_token,
        });
      } else {
        return res.status(401).json(info);
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  })(req, res);
};
