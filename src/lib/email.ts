import nodemailer from "nodemailer";

export async function sendEmail({
  from,
  subject,
  html,
}: {
  from: string;
  subject: string;
  html: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from,
    to: process.env.EMAIL_TO,
    subject,
    html,
  });
}
