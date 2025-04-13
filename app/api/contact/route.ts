import { Resend } from 'resend';

export const runtime = 'edge'; // ✅ Serverless environment safe

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const html = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>📬 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f1f1f1; padding: 10px; border-left: 4px solid #007bff;">
        ${message}
      </div>
      <hr style="margin: 24px 0;" />
      <p style="font-size: 12px; color: #888;">Sent via your portfolio contact form</p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM!,
      to: process.env.RESEND_EMAIL_TO!,
      subject: `New contact from ${name}`,
      html,
    });

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend Error:", error?.response?.data || error.message);
    return Response.json(
      { success: false, error: "Resend failed: " + (error?.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
