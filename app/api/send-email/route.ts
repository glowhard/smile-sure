import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

const RECIPIENT = process.env.CONTACT_FORM_RECIPIENT || "care@smilesure.in";

const escapeHtml = (input: string): string =>
    input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map<string, number[]>();

const isRateLimited = (ip: string): boolean => {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    const timestamps = (requestLog.get(ip) || []).filter((t) => t > windowStart);

    if (timestamps.length >= RATE_LIMIT_MAX) {
        requestLog.set(ip, timestamps);
        return true;
    }

    timestamps.push(now);
    requestLog.set(ip, timestamps);
    return false;
};

const getClientIp = (req: Request): string => {
    const forwarded = req.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    return req.headers.get("x-real-ip") || "unknown";
};

export async function POST(req: Request) {
    try {
        const ip = getClientIp(req);

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again in a minute." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { email, name, phone, date, turnstileToken } = body ?? {};

        if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
            const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: turnstileToken,
                    remoteip: ip,
                }),
            });

            const verification = await verifyRes.json();

            if (!verification.success) {
                return NextResponse.json(
                    { error: "Bot verification failed. Please try again." },
                    { status: 403 }
                );
            }
        }

        if (!email || !name || !phone || !date) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        if (
            typeof email !== "string" ||
            typeof name !== "string" ||
            typeof phone !== "string" ||
            typeof date !== "string"
        ) {
            return NextResponse.json(
                { error: "Invalid fields" },
                { status: 400 }
            );
        }

        const safeEmail = escapeHtml(email.slice(0, 200));
        const safeName = escapeHtml(name.slice(0, 200));
        const safePhone = escapeHtml(phone.slice(0, 40));

        const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        await sendEmail({
            to: RECIPIENT,
            subject: `New Appointment - ${safeName}`,
            html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Appointment</title>
      </head>
      <body style="margin:0;padding:0;background:#f8f6f4;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(110,78,36,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#6e4e24;padding:24px 28px;">
                    <h2 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">
                      New Appointment Request
                    </h2>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:28px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e0d8;border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 16px;border-bottom:1px solid #f1ebe6;">
                          <p style="margin:0 0 4px;font-size:11px;color:#9a8576;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">
                            Patient Name
                          </p>
                          <p style="margin:0;font-size:15px;color:#1f2937;font-weight:500;">
                            ${safeName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 16px;border-bottom:1px solid #f1ebe6;">
                          <p style="margin:0 0 4px;font-size:11px;color:#9a8576;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">
                            Phone
                          </p>
                          <p style="margin:0;font-size:15px;color:#1f2937;">
                            <a href="tel:${safePhone}" style="color:#6e4e24;text-decoration:none;font-weight:500;">${safePhone}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 16px;border-bottom:1px solid #f1ebe6;">
                          <p style="margin:0 0 4px;font-size:11px;color:#9a8576;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">
                            Email
                          </p>
                          <p style="margin:0;font-size:15px;color:#1f2937;">
                            <a href="mailto:${safeEmail}" style="color:#6e4e24;text-decoration:none;">${safeEmail}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 16px;background:#faf8f6;">
                          <p style="margin:0 0 4px;font-size:11px;color:#9a8576;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">
                            Preferred Date
                          </p>
                          <p style="margin:0;font-size:15px;color:#6e4e24;font-weight:600;">
                            ${formattedDate}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:16px 28px;background:#faf8f6;border-top:1px solid #f1ebe6;">
                    <p style="margin:0;font-size:12px;color:#9a8576;text-align:center;">
                      SmileSure Dental Care - Sector 120, Noida
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[send-email] failed to send:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
