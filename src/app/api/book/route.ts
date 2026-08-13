import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = process.env.BOOKING_NOTIFY_EMAIL ?? "info@gostatenext.com";

type BookingPayload = {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  date: string;
  time: string;
  notes?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Booking notifications are not configured yet." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as Partial<BookingPayload>;
  const { name, email, phone, reason, date, time, notes } = body;

  if (!name || !email || !reason || !date || !time) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const [notifyResult, confirmationResult] = await Promise.all([
    resend.emails.send({
      from: "StateNext Labs Booking <booking@mail.gostatenext.com>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New appointment request: ${reason} — ${date} at ${time}`,
      text: [
        `Reason: ${reason}`,
        `Date: ${date}`,
        `Time: ${time} (Central)`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        "",
        "Notes:",
        notes || "—",
      ].join("\n"),
    }),
    resend.emails.send({
      from: "StateNext Labs <booking@mail.gostatenext.com>",
      to: email,
      replyTo: NOTIFY_EMAIL,
      subject: `We've received your appointment request — ${date} at ${time}`,
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out to StateNext Labs. We've received your appointment request and will confirm within one business day.",
        "",
        `Reason: ${reason}`,
        `Requested date: ${date}`,
        `Requested time: ${time} (Central)`,
        "",
        "If anything changes on your end, just reply to this email.",
        "",
        "— StateNext Labs",
      ].join("\n"),
    }),
  ]);

  if (notifyResult.error) {
    console.error("Resend error (notify):", notifyResult.error);
    return NextResponse.json(
      { error: "Failed to send notification email." },
      { status: 502 }
    );
  }

  if (confirmationResult.error) {
    console.error("Resend error (confirmation):", confirmationResult.error);
  }

  return NextResponse.json({ ok: true });
}
