import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check for Resend API key
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      // Send email via Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["randisumitro2@gmail.com"],
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #3b82f6; margin-bottom: 24px;">Pesan Baru dari Portfolio</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 100px; font-weight: 600;">Nama:</td>
                  <td style="padding: 8px 0; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Subjek:</td>
                  <td style="padding: 8px 0; color: #111827;">${subject}</td>
                </tr>
              </table>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />
              <h3 style="color: #374151; margin-bottom: 12px;">Pesan:</h3>
              <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #374151; white-space: pre-wrap;">${message}</div>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />
              <p style="color: #9ca3af; font-size: 12px;">Dikirim dari portfolio: randisumitro.vercel.app</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend error:", errorData);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log to console (for development without Resend)
      console.log("Contact form submission (no Resend key):", {
        name,
        email,
        subject,
        message: message.slice(0, 100) + "...",
        timestamp: new Date().toISOString(),
      });

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error", details: error },
      { status: 500 }
    );
  }
}
