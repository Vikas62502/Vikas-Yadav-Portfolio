import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Bawal XI Privacy Policy",
  description:
    "Privacy Policy for the Bawal XI mobile app by Vikas Yadav. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "/apps/bawal-xi/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "November 17, 2026";

export default function BawalXiPrivacyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <p className={styles.eyebrow}>Bawal XI · Mobile App</p>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: {lastUpdated}</p>

        <p>
          This Privacy Policy explains how <strong>Bawal XI</strong> (“the App”, “we”, “us”, or “our”),
          developed by <strong>Vikas Yadav</strong>, collects, uses, and shares information when you use
          the Bawal XI Android application available on Google Play.
        </p>
        <p>
          By using Bawal XI, you agree to this Privacy Policy. If you do not agree, please do not use the App.
        </p>

        <section>
          <h2>1. Who we are</h2>
          <ul>
            <li>
              <strong>App name:</strong> Bawal XI
            </li>
            <li>
              <strong>Developer:</strong> Vikas Yadav
            </li>
            <li>
              <strong>Contact email:</strong>{" "}
              <a href="mailto:vikasyadav62502@gmail.com">vikasyadav62502@gmail.com</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://vikasyadav.online" target="_blank" rel="noopener noreferrer">
                https://vikasyadav.online
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <p>Depending on how you use Bawal XI, we may collect the following categories of information:</p>

          <h3>2.1 Information you provide</h3>
          <ul>
            <li>Account or profile details (such as name, username, email), if account features are offered</li>
            <li>Content you submit inside the App (such as preferences, feedback, or support messages)</li>
            <li>Any information you choose to share when contacting support</li>
          </ul>

          <h3>2.2 Information collected automatically</h3>
          <ul>
            <li>Device information (model, OS version, language, app version)</li>
            <li>Usage data (screens viewed, feature interactions, crash logs, performance diagnostics)</li>
            <li>Approximate network information (IP address, carrier/network type) for security and analytics</li>
            <li>Advertising identifiers (such as Google Advertising ID), if ads or analytics SDKs are used</li>
          </ul>

          <h3>2.3 Permissions</h3>
          <p>
            If Bawal XI requests device permissions (for example notifications, internet access, storage,
            camera, or media), those permissions are used only to provide the related App features. You can
            revoke permissions in your device settings at any time.
          </p>
        </section>

        <section>
          <h2>3. How we use information</h2>
          <ul>
            <li>To operate, maintain, and improve Bawal XI</li>
            <li>To personalize content and user experience</li>
            <li>To fix bugs, monitor crashes, and improve performance</li>
            <li>To provide customer support and respond to requests</li>
            <li>To send important service or update notices</li>
            <li>To show ads (if advertising is enabled in the App)</li>
            <li>To detect, prevent, and address fraud, abuse, or security issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. How we share information</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> that help us run the App (hosting, analytics, crash reporting,
              cloud infrastructure, customer support tools)
            </li>
            <li>
              <strong>Advertising partners</strong>, if the App shows ads (for example Google AdMob or similar
              networks)
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law or to protect rights, safety, and security
            </li>
            <li>
              <strong>Business transfers</strong>, if the App or related assets are transferred as part of a
              merger, acquisition, or sale
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Third-party services</h2>
          <p>
            Bawal XI may use third-party SDKs and services (for example analytics, crash reporting, authentication,
            payments, or advertising). These services may collect information according to their own privacy
            policies. Examples may include Google Play Services, Firebase, Google Analytics, or ad networks.
          </p>
          <p>
            We encourage you to review the privacy policies of any third-party services you interact with through
            the App.
          </p>
        </section>

        <section>
          <h2>6. Data retention</h2>
          <p>
            We keep information only as long as needed for the purposes described in this Policy, unless a longer
            retention period is required by law. When information is no longer needed, we delete or anonymize it
            where reasonably possible.
          </p>
        </section>

        <section>
          <h2>7. Data security</h2>
          <p>
            We use reasonable technical and organizational measures to protect information against unauthorized
            access, loss, misuse, or alteration. No method of transmission or storage is 100% secure, so we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>8. Children’s privacy</h2>
          <p>
            Bawal XI is not directed to children under 13 (or the minimum age required in your country). We do not
            knowingly collect personal information from children. If you believe a child has provided us personal
            information, contact us and we will take appropriate steps to delete it.
          </p>
        </section>

        <section>
          <h2>9. Your rights and choices</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Opt out of personalized ads via your device advertising settings</li>
            <li>Disable notifications in device settings</li>
          </ul>
          <p>
            To make a privacy request, email{" "}
            <a href="mailto:vikasyadav62502@gmail.com">vikasyadav62502@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>10. International users</h2>
          <p>
            If you use Bawal XI from outside India, your information may be processed in India or other countries
            where our service providers operate. Those countries may have different data-protection laws than your
            own.
          </p>
        </section>

        <section>
          <h2>11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when
            we do. Continued use of Bawal XI after an update means you accept the revised Policy.
          </p>
        </section>

        <section>
          <h2>12. Contact us</h2>
          <p>If you have questions about this Privacy Policy or Bawal XI privacy practices, contact:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:vikasyadav62502@gmail.com">vikasyadav62502@gmail.com</a>
            </li>
            <li>
              <strong>Developer:</strong> Vikas Yadav
            </li>
            <li>
              <strong>Privacy page:</strong>{" "}
              <a href="https://vikasyadav.online/apps/bawal-xi/privacy">
                https://vikasyadav.online/apps/bawal-xi/privacy
              </a>
            </li>
          </ul>
        </section>

        <p className={styles.back}>
          <Link href="/">← Back to portfolio</Link>
        </p>
      </article>
    </main>
  );
}
