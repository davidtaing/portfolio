// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface Email {
  to: string;
  from: string;
  subject?: string;
  reply_to: {
    email: string;
    name?: string;
  };
  text: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
  } else {
    const { name, email: senderEmail, message } = req.body;
    const email: Email = {
      to: process.env.SEND_TO_EMAIL as string,
      from: process.env.SEND_FROM_EMAIL as string,
      subject: `teeang.net Contact Form Submission from ${name}`,
      reply_to: {
        email: senderEmail,
      },
      text: message,
    };
    console.log(email);

    try {
      sgMail.send(email).then(() => {
        console.log("Contact Email Sent.");
      });

      res.status(200).json("Contact Email Sent.");
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}
