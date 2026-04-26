import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const port = Number(process.env.EMAIL_PORT || 587);
const secure = process.env.EMAIL_SECURE === "true";

const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
});

export const sendEmail = async ({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) => {
    if (!host || !user || !pass) {
        throw new Error(
            "Email transport not configured: missing EMAIL_HOST, EMAIL_USER, or EMAIL_PASS"
        );
    }

    await transporter.sendMail({
        from: `"Smile Sure Dental Care" <${user}>`,
        to,
        subject,
        html,
    });
};
