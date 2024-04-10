import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import EmailUser from "@/components/molecules/email/emailUser";
import EmailAdmin from "@/components/molecules/email/emailAdmin";
export async function POST(request) {
  try {
    const hostKey = process.env.MAIL_HOST;
    const hostPort = process.env.MAIL_PORT;
    const hostEmail = process.env.MAIL_ACCOUNT;
    const hostPassword = process.env.MAIL_PWD;
    const { subject, message, email, formData, mailFlag, partner_short } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: hostKey,
      port: hostPort,
      secure: true,
      auth: {
        user: hostEmail,
        pass: hostPassword,
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(subject, message, email);
        console.log(error);
      } else {
        console.log(success);
        console.log("Server is ready to take our messages");
      }
    });

    const emailHtml = mailFlag
      ? render(<EmailAdmin formData={formData} />)
      : render(<EmailUser subject={subject} message={message} />);
    const mailOption = {
      from: hostEmail,
      to: email,
      subject: subject,
      html: emailHtml,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
