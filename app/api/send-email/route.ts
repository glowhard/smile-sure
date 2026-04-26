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
        const { email, name, phone, date } = body ?? {};

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
        const safeDate = escapeHtml(date.slice(0, 40));

        await sendEmail({
            to: RECIPIENT,
            subject: "Smile Sure - New Contact Form",
            html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Smile Sure - New Contact Message</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#111827;padding:20px 24px;">
                    <h2 style="margin:0;color:#ffffff;font-size:20px;">
                      Smile Sure - New Contact Message
                    </h2>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 12px;color:#374151;font-size:14px;">
                      You received a new message from your website contact form from Smile Sure.
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;border:1px solid #e5e7eb;border-radius:6px">
                      <tr>
                        <td style="padding:12px;background:#f9fafb;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Email</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${safeEmail}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px;background:#f9fafb;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Name</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${safeName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px;background:#f9fafb;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Phone</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${safePhone}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px;background:#f9fafb;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Preferred Date</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${safeDate}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:16px 24px;background:#f9fafb;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#6b7280;">
                      This email was sent from your website contact form from Smile Sure.
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
