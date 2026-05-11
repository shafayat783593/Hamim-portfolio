import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { user_name, user_email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOption = {
      from: `"${user_name}" <${user_email}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Portfolio Inquiry from ${user_name}`,
     html: `
    <div style="background-color: #f1f5f9; padding: 40px 10px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
        
        {/* Header Section */}
        <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 40px 20px; text-align: center;">
          <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); padding: 10px 20px; border-radius: 50px; margin-bottom: 15px; border: 1px solid rgba(255, 255, 255, 0.3);">
            <span style="color: #ffffff; font-size: 12px; font-weight: bold; letter-spacing: 2px; uppercase;">New Inquiry</span>
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Portfolio Notification</h1>
        </div>

        {/* Content Section */}
        <div style="padding: 40px; color: #1e293b;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Hello, <br> You have a new message waiting from your <strong>Portfolio Website</strong> contact form.
          </p>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 16px; border: 1px solid #f1f5f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding-bottom: 15px;">
                  <span style="font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">Sender Name</span>
                  <span style="font-size: 16px; font-weight: 600; color: #0f172a;">${user_name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 15px;">
                  <span style="font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">Email Address</span>
                  <a href="mailto:${user_email}" style="font-size: 16px; font-weight: 600; color: #2563eb; text-decoration: none;">${user_email}</a>
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 8px;">Message</span>
                  <div style="font-size: 15px; line-height: 1.6; color: #475569; background: #ffffff; padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0;">
                    ${message}
                  </div>
                </td>
              </tr>
            </table>
          </div>

          {/* Action Button */}
          <div style="text-align: center; margin-top: 35px;">
            <a href="mailto:${user_email}" style="background-color: #0f172a; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px; display: inline-block;">
              Reply to Message
            </a>
          </div>

          {/* Footer */}
          <div style="border-top: 1px solid #f1f5f9; margin-top: 40px; padding-top: 20px; text-align: center;">
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">
              &copy; ${new Date().getFullYear()} Md Shafayat Hosan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json({ success: true, message: "Sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}