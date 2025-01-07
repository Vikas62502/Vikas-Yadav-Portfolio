import transporter from "@/lib/transporter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  const myEmail = process.env.MY_EMAIL;

  try {
    const mailOptions = {
      from: `${name} <${email}>`,
      to: myEmail,
      subject: subject,
      html: `
     <html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f3f4f6;
        color: #333;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #4caf50;
        color: #ffffff;
        text-align: center;
        padding: 15px 20px;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1px;
      }
      .content {
        padding: 20px;
        line-height: 1.6;
        color: #555;
        font-size: 16px;
      }
      .content p {
        margin: 10px 0;
      }
      .footer {
        background-color: #f1f1f1;
        text-align: center;
        padding: 10px 20px;
        font-size: 14px;
        color: #777;
      }
      .footer p {
        margin: 5px 0;
      }
      .emoji {
        font-size: 24px;
        margin-right: 5px;
        vertical-align: middle;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <span class="emoji">📬</span> Contact Us Message
      </div>
      <div class="content">
        <p>👋 Hello,</p>
        <p>${message}</p>
        <p style="margin-top: 20px;">Regards,</p>
        <p>${name} <span class="emoji">✨</span></p>
      </div>
      <div class="footer">
        <p>💌 Thank you for getting in touch with us!</p>
        <p>We will respond to you as soon as possible.</p>
      </div>
    </div>
  </body>
</html>
      `,
    };

    // send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Email not sent" }, { status: 500 });
  }
};