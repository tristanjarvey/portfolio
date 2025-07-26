import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import axios from "axios";
import { sendEmail } from "@/lib/email";

const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(1, "Message is required"),
    token: z.string().min(1, "CAPTCHA token is missing"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Method not allowed"})
    }

    const parsed = ContactSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ success: false, error: parsed.error?.issues?.[0]?.message || "Invalid input" });
    }

    const { name, email, message, token } = parsed.data;

    try {
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const { data } = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            null,
            {
                params: {
                    secret,
                    response: token,
                },
            }
        );

        if (!data.success || data.score < 0.5) {
            return res.status(400).json({ success: false, error: "Failed CAPTCHA verification" });
        }

        if (process.env.NODE_ENV === "development") {
            console.log("Sending message via EmailJS: ", { name, email, message });
        }
        await sendEmail({
            from: `${name} <${email}>`,
            subject: "New message from portfolio contact form",
            html: `
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br />")}</p>
            `,
        });
        
        return res.status(200).json({ success: true });

    } catch (err) {
        console.error("Error in /api/contact:", err);
        return res.status(500).json({ success: false, error: "Email failed to send" });
    }
}