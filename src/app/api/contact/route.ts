import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.protonmail.ch",
    port: 587, // Proton SMTP submission — STARTTLS
    secure: false, // false for 587 (STARTTLS); set true only if using port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Proton SMTP token (not the account password)
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"WebbingHUB" <hello@webbinghub.io>`,
      to: "hello@webbinghub.io",
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
