import transporter from "@/lib/transporter";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const subject = String(body.subject ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    subject: escapeHtml(subject),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NODEMAILER_USERNAME}>`,
      to: process.env.MY_EMAIL,
      replyTo: `${name.replace(/["<>]/g, "")} <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#0b0b0e;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#16161b;border:1px solid #2a2a31;border-radius:14px;overflow:hidden;">
      <div style="padding:14px 18px;background:#1f1f26;border-bottom:1px solid #2a2a31;">
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ff5f56;margin-right:6px;"></span>
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffbd2e;margin-right:6px;"></span>
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#27c93f;margin-right:12px;"></span>
        <span style="color:#a1a1aa;font-family:Consolas,monospace;font-size:13px;">new-message.json</span>
      </div>
      <div style="padding:24px;">
        <p style="margin:0 0 4px;color:#e11d48;font-family:Consolas,monospace;font-size:12px;">NEW PORTFOLIO MESSAGE</p>
        <h2 style="margin:0 0 20px;color:#fafafa;font-size:20px;">${safe.subject}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#d4d4d8;">
          <tr><td style="padding:6px 0;color:#a1a1aa;width:80px;">Name</td><td style="padding:6px 0;">${safe.name}</td></tr>
          <tr><td style="padding:6px 0;color:#a1a1aa;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe.email}" style="color:#fb7185;">${safe.email}</a></td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#0f0f13;border:1px solid #2a2a31;border-radius:10px;color:#e4e4e7;font-size:15px;line-height:1.6;">
          ${safe.message}
        </div>
        <p style="margin:20px 0 0;color:#71717a;font-size:12px;">Hit reply to respond directly to ${safe.name}.</p>
      </div>
    </div>
  </body>
</html>`,
    });
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Email not sent" }, { status: 500 });
  }
};
