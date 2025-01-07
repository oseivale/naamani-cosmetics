import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      console.error("Validation failed: Missing required fields.");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Received data:", { name, email, message });

    const transporter = nodemailer.createTransport({
      //   service: "Gmail",
      host: "smtp.gmail.com",
      port: 2525,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Contact Form Submission",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    console.log("Sending email with options:", mailOptions);

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in send-email route:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
