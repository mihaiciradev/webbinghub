import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Use 465 for SSL or 587 for TLS (with secure: false)
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"WebbingHUB Support" <support@webbinghub.io>`,
      to: "support@webbinghub.io",
      subject: "New Contact Request",
      text: `New contact request from ${email}`,
      html: `<p>New contact request from <b>${email}</b></p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error); // Add this to log the error
    return NextResponse.json(
      { message: "Email sending failed." },
      { status: 500 }
    );
  }
}
