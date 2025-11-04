import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  try {
    // Hiring email
    await transporter.sendMail({
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Hiring Request from ${body.company} - ${body.position}`,
      text: body.message,
      html: `<p>Name: ${body.name}</p>
      <p>Email: ${body.email}</p>
      <p>Phone: ${body.phone}</p>
      <p>Company: ${body.company}</p>
      <p>Position: ${body.position}</p>
      <p>Message: ${body.message}</p>`,
    });
    // Confirmation email
    await transporter.sendMail({
      to: body.email,
      subject: `Thank you for your hiring request — ${body.position} at ${body.company}`,
      html: `
        <p>Dear ${body.name},</p>
    
        <p>Thank you for reaching out and expressing interest in hiring me for the <strong>${
          body.position
        }</strong> role at <strong>${body.company}</strong>.</p>
    
        <p>I’ve received your details as follows:</p>
        <ul>
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Phone:</strong> ${body.phone}</li>
          <li><strong>Company:</strong> ${body.company}</li>
          <li><strong>Position:</strong> ${body.position}</li>
        </ul>
    
        ${
          body.message
            ? `<p><strong>Your Message:</strong><br>${body.message}</p>`
            : ""
        }
    
        <p>I’ll review your request and get back to you shortly. I truly appreciate your interest and look forward to the possibility of collaborating with your team.</p>
    
        <p>Best regards,<br>
        <strong>Aman Kumar</strong><br>
        <a href="mailto:a.amankrpin2@gmail.com">a.amankrpin2@gmail.com</a><br>
        <a href="https://aman-kumar-dusky.vercel.app/">https://aman-kumar-dusky.vercel.app/</a>
        </p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Email not sent" }, { status: 500 });
  }
}
