import { NextResponse } from "next/server";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 300,
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  try {
    // Enforce rate limiting
    await rateLimiter.consume(ip);

    // Parse form data
    const body = await request.json();
    const { firstName, lastName, companyName, email, answer, comments } = body;

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    } as SMTPTransport.Options);

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER, //rekta sa apgitemail
      subject: "AP GLOBAL IT SOLUTIONS INC. Contact Form",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #eaf6ff; padding: 20px; border-radius: 10px; color: #003f63;">
      <img src="https://res.cloudinary.com/douirlo1v/image/upload/v1750330780/APLOGO_bxq95o.png" alt="Company Logo" style="width: 150px; margin-bottom: 20px;" />

      <p style="font-size: 16px; margin-bottom: 16px;">To whom it may concern,</p>
      
      <p style="font-size: 14px; margin-bottom: 20px;">${comments}</p>
      
      <p style="font-size: 14px; font-style: italic; margin-bottom: 30px;">
        Decision timeline: <strong>${answer}</strong>
      </p>
      
      <p style="font-size: 14px; margin-bottom: 4px;">Truly yours,</p>
      <p style="font-size: 16px; font-weight: bold;">${companyName}</p>
    </div>
  `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof RateLimiterRes) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const message =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
