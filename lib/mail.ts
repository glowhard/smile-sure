import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL || "noreply@smilesure.in";

export const sendEmail = async ({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) => {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("Email transport not configured: missing RESEND_API_KEY");
    }

    await resend.emails.send({
        from: `SmileSure Dental Care <${FROM_ADDRESS}>`,
        to,
        subject,
        html,
    });
};
