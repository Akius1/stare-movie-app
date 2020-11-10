import nodemailer from "nodemailer";

export default async function invite(
  receiverEmail: string,
  messageBody: string,
) {
  function validateEmail(email: string) {
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  try {
    if (!validateEmail(receiverEmail)) {
      console.log("validation failed");
      return -1;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anabizconcept9@gmail.com",
        pass: "anabiz-1987",
      },
    });
    const info = await transporter.sendMail({
      from: `"Stare" <anabizconcept9@gmail.com>`,
      to: receiverEmail,
      subject: "Hello!",
      html: messageBody,
    });
    return info.messageId;
  } catch (error) {
    console.log(error);
    return -1;
  }
}
