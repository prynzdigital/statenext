"use client";

import { useMemo, useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { GLASS, CARD_SHADOW, CTA_SHADOW, CTA_SHADOW_HOVER } from "@/lib/glass";

const REASONS = [
  "Discovery Call",
  "Project Consultation",
  "Technology Assessment",
  "Ongoing Client Support",
  "Other",
];

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const WEEKDAY_LABEL = new Intl.DateTimeFormat("en-US", { weekday: "short" });
const MONTH_DAY_LABEL = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});
const FULL_DATE_LABEL = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

function getUpcomingBusinessDays(count: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function AppointmentBooking() {
  const businessDays = useMemo(() => getUpcomingBusinessDays(10), []);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState(REASONS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [requested, setRequested] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const isComplete = Boolean(selectedDate && selectedTime && name && email);

  const mailtoHref = selectedDate
    ? `mailto:info@gostatenext.com?subject=${encodeURIComponent(
        `Appointment request: ${reason} on ${MONTH_DAY_LABEL.format(
          selectedDate
        )}${selectedTime ? ` at ${selectedTime}` : ""}`
      )}&body=${encodeURIComponent(
        `Reason: ${reason}\nRequested date: ${FULL_DATE_LABEL.format(
          selectedDate
        )}\nRequested time: ${selectedTime ?? ""} (Central Time)\n\nName: ${name}\nEmail: ${email}${
          phone ? `\nPhone: ${phone}` : ""
        }${notes ? `\n\nNotes:\n${notes}` : ""}`
      )}`
    : undefined;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isComplete || !selectedDate || !selectedTime) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          reason,
          date: FULL_DATE_LABEL.format(selectedDate),
          time: selectedTime,
          notes,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("idle");
      setRequested(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal
          className={`${GLASS} ${CARD_SHADOW} grid gap-14 rounded-3xl p-9 sm:p-12 lg:grid-cols-2`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
              Book an appointment
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Let&apos;s talk about your next state
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-700">
              Pick a day and time that works for you and tell us a bit about
              what you&apos;re trying to build, modernize, or automate.
              We&apos;ll confirm your slot by email.
            </p>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-sm font-semibold text-navy-900">Email</dt>
                <dd className="mt-1 text-navy-700">info@gostatenext.com</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-navy-900">Phone</dt>
                <dd className="mt-1 text-navy-700">312-287-8155</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-navy-900">
                  Address
                </dt>
                <dd className="mt-1 text-navy-700">
                  332 S Michigan Ave, Floor 9, Chicago, IL 60604
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-navy-900">
                  Business hours
                </dt>
                <dd className="mt-1 text-navy-700">
                  Mon&ndash;Fri, 9:00 AM&ndash;5:00 PM Central
                </dd>
              </div>
            </dl>
          </div>

          {requested ? (
            <div className="flex flex-col items-start justify-center rounded-2xl border border-navy-900/10 bg-navy-900/[0.03] p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10 text-2xl text-red-600">
                ✓
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-navy-900">
                Request sent
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                We&apos;ve notified our team of your requested time of{" "}
                <span className="font-semibold text-navy-900">
                  {selectedDate && FULL_DATE_LABEL.format(selectedDate)} at{" "}
                  {selectedTime}
                </span>
                . We&apos;ll confirm by email within one business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setRequested(false);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
                className="mt-6 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                Book a different time →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-navy-900/80">
                    Choose a date
                  </label>
                  <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                    {businessDays.map((date) => {
                      const isSelected =
                        selectedDate?.toDateString() === date.toDateString();
                      return (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`flex flex-shrink-0 flex-col items-center rounded-xl border px-3.5 py-2.5 text-center transition-colors ${
                            isSelected
                              ? "border-red-600 bg-red-600 text-white"
                              : "border-navy-900/15 bg-navy-900/5 text-navy-900 hover:border-red-500/50"
                          }`}
                        >
                          <span
                            className={`text-[11px] font-semibold uppercase tracking-wide ${
                              isSelected ? "text-white/80" : "text-navy-900/50"
                            }`}
                          >
                            {WEEKDAY_LABEL.format(date)}
                          </span>
                          <span className="text-sm font-semibold">
                            {MONTH_DAY_LABEL.format(date)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy-900/80">
                    Choose a time{" "}
                    <span className="text-navy-900/40">(Central)</span>
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {TIME_SLOTS.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={!selectedDate}
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-lg border px-2 py-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                            isSelected
                              ? "border-red-600 bg-red-600 text-white"
                              : "border-navy-900/15 bg-navy-900/5 text-navy-900 hover:border-red-500/50"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="text-sm font-medium text-navy-900/80"
                  >
                    Reason for appointment
                  </label>
                  <select
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-navy-900/15 bg-navy-900/5 px-4 py-2.5 text-navy-900 outline-none transition-colors focus:border-red-500 focus:bg-white"
                  >
                    {REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-navy-900/80"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-navy-900/15 bg-navy-900/5 px-4 py-2.5 text-navy-900 placeholder-navy-900/35 outline-none transition-colors focus:border-red-500 focus:bg-white"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-navy-900/80"
                    >
                      Phone{" "}
                      <span className="text-navy-900/40">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-navy-900/15 bg-navy-900/5 px-4 py-2.5 text-navy-900 placeholder-navy-900/35 outline-none transition-colors focus:border-red-500 focus:bg-white"
                      placeholder="(312) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-navy-900/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-navy-900/15 bg-navy-900/5 px-4 py-2.5 text-navy-900 placeholder-navy-900/35 outline-none transition-colors focus:border-red-500 focus:bg-white"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="text-sm font-medium text-navy-900/80"
                  >
                    Anything we should know?{" "}
                    <span className="text-navy-900/40">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 w-full resize-none rounded-lg border border-navy-900/15 bg-navy-900/5 px-4 py-2.5 text-navy-900 placeholder-navy-900/35 outline-none transition-colors focus:border-red-500 focus:bg-white"
                    placeholder="A few sentences about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isComplete || status === "sending"}
                  className={`${CTA_SHADOW} ${CTA_SHADOW_HOVER} w-full rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none`}
                >
                  {status === "sending" ? "Sending…" : "Request Appointment"}
                </button>
                {status === "error" ? (
                  <p className="text-center text-xs text-red-600">
                    Something went wrong sending your request.{" "}
                    <a
                      href={mailtoHref}
                      className="font-semibold underline underline-offset-2"
                    >
                      Email us directly
                    </a>{" "}
                    instead.
                  </p>
                ) : (
                  <p className="text-center text-xs text-navy-900/45">
                    We&apos;ll email you to confirm within one business day.
                  </p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
