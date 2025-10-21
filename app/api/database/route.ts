import { NextResponse } from "next/server";
import { db } from "@/lib/db.config";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 300,
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  try {
    await rateLimiter.consume(ip);

    const { firstName, lastName, companyName, email, answer, comments } =
      await req.json();

    const query = `
      INSERT INTO contact_form 
      (first_name, last_name, company_name, company_email, decision, comment) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
      firstName,
      lastName,
      companyName,
      email,
      answer,
      comments,
    ]);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof RateLimiterRes) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const message =
      error instanceof Error ? error.message : "Failed to submit form";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
