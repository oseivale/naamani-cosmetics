import { emailFormSchema } from "@/app/lib/schema";
// import { renderToHTML } from "next/dist/server/render";
import { NextResponse } from "next/server";
// import { render } from "@react-email/render"; // ✅ Converts React to HTML
// import React from "react";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📡 Sending email using Fetch API...");
    console.log("data", req);

    const validatedData = emailFormSchema.parse(body);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "valerie.osei@gmail.com",
        // to: 'damankconsulting@yahoo.com',
        subject: `[TEST] Message from customer: ${validatedData.name}`,
        // html: `<p><strong>Name:</strong> ${validatedData.name}</p>
        // <p><strong>Email:</strong> ${validatedData.email}</p>
        // <p><strong>Message:</strong> ${validatedData.message}</p>`,
        html: `
        <div>
            <h2>New Contact Form Submission</h2>
            <p>Hey Doris, you've received a new submission from a customer:</p>
            <div>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Message:</strong> ${validatedData.message}</p>
            </div>
            <p>
                This email was sent via Naamani Cosmetics contact form.
            </p>
        </div>
        `,
      }),
    });

    const data = await response.json();
    console.log("✅ Fetch Response:", data);

    if (!response.ok) {
      throw new Error(`Fetch failed: ${data.message || "Unknown error"}`);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("🚨 API Fetch Error:", error);
    return NextResponse.json(
      { error: "Fetch request failed", details: error },
      { status: 500 }
    );
  }
}
