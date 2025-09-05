import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(null);
    setError(null);

    if (!recaptchaToken) {
      setError("Please verify you're not a robot.");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, token: recaptchaToken }),
    });

    const data = await res.json();
    if (data.success) {
      setSuccess("Message sent!");
      setForm({ name: "", email: "", message: "" })
    } else {
      setError (data.error || "Something went wrong.");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-gold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-card text-theme border-theme placeholder:text-theme"
        />
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-card text-theme border-theme placeholder:text-theme"
        />
        <Textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="bg-card text-theme border-theme placeholder:text-theme"
        />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={handleCaptcha}
          />
        ) : (
          <p className="text-red-500">CAPTCHA failed to load. Please try again later.</p>
        )}
        <Button type="submit" disabled={isLoading}>
          { isLoading ? "Sending..." : "Send Message"}
        </Button>
        {success && <p className="text-green-500 text-sm">{success}</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}