import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
    try {
        const { email, name, phone, date } = await req.json();

        if (!email || !name || !phone || !date) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        await sendEmail({
            to: "gursewaksaggu.dev@gmail.com",
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
                        <td style="padding:12px;background:#f9fafb;;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Email</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${email}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px;background:#f9fafb;;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Name</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${name}
                          </p>
                        </td>
                      </tr>
                       <tr>
                        <td style="padding:12px;background:#f9fafb;;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Phone</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${phone}
                          </p>
                        </td>
                      </tr>
                       <tr>
                        <td style="padding:12px;background:#f9fafb;;">
                          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                            <strong>Preferred Date</strong>
                          </p>
                          <p style="margin:0;font-size:14px;color:#111827;">
                            ${date}
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
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
