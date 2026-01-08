export const metadata = {
    title: "Privacy Policy | Smile Sure Dental Care",
    description:
        "Privacy Policy for Smile Sure Dental Care. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Privacy Policy
                </h1>

                <section className="mt-6 space-y-4 text-gray-700 text-sm leading-7">
                    <p>
                        At <span className="font-semibold">Smile Sure</span>, we respect your
                        privacy and are committed to protecting the personal information you
                        share with us. This Privacy Policy explains how we collect, use, and
                        safeguard your information when you visit our website or use our
                        dental care services.
                    </p>
                </section>

                <Section title="1. Information We Collect">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Appointment details</li>
                        <li>Information shared through contact forms</li>
                    </ul>
                    <p>
                        Any dental or health-related information you provide is used only to
                        offer appropriate dental care and consultation.
                    </p>
                </Section>

                <Section title="2. How We Use Your Information">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To schedule and manage appointments</li>
                        <li>To respond to inquiries and requests</li>
                        <li>To provide dental services</li>
                        <li>To improve our website and services</li>
                        <li>To communicate important updates</li>
                    </ul>
                    <p>
                        We do not sell, rent, or trade your personal information to third
                        parties.
                    </p>
                </Section>

                <Section title="3. Data Sharing">
                    <p>
                        Your information may be shared only when required by law or when
                        necessary to provide our services. All shared data is handled
                        securely and responsibly.
                    </p>
                </Section>

                <Section title="4. Data Security">
                    <p>
                        We take reasonable technical and organizational measures to protect
                        your personal information from unauthorized access, misuse, or loss.
                    </p>
                </Section>

                <Section title="5. Cookies">
                    <p>
                        Smile Sure may use cookies or similar technologies to improve website
                        functionality and user experience. You can manage cookies through
                        your browser settings.
                    </p>
                </Section>

                <Section title="6. Your Rights">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Request access to your personal data</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data, subject to legal requirements</li>
                    </ul>
                </Section>

                <Section title="7. Third-Party Links">
                    <p>
                        Our website may contain links to third-party websites. We are not
                        responsible for their privacy practices and encourage you to review
                        their privacy policies.
                    </p>
                </Section>

                <Section title="8. Children’s Privacy">
                    <p>
                        Smile Sure does not knowingly collect personal information from
                        children under the age of 13 without parental consent.
                    </p>
                </Section>

                <Section title="9. Changes to This Privacy Policy">
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will
                        be posted on this page with an updated date.
                    </p>
                </Section>

                <Section title="10. Contact Us">
                    <p>
                        If you have any questions about this Privacy Policy or how we handle
                        your data, please contact us through our website.
                    </p>
                </Section>

                <p className="mt-10 text-center text-xs text-gray-500">
                    © Smile Sure Dental Care. All rights reserved.
                </p>
            </div>
        </main>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-8 space-y-3 text-sm text-gray-700 leading-7">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            {children}
        </section>
    );
}
