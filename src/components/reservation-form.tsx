import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "lavender-reservations";

const TIME_SLOTS: string[] = (() => {
  const slots: string[] = [];
  for (let h = 11; h <= 23; h++) {
    for (const m of [0, 30]) {
      if (h === 23 && m === 30) continue;
      const hour12 = ((h + 11) % 12) + 1;
      const ampm = h >= 12 ? "PM" : "AM";
      slots.push(`${hour12}:${m === 0 ? "00" : "30"} ${ampm}`);
    }
  }
  return slots;
})();

export type ReservationRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
  createdAt: string;
};

export function ReservationForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState<ReservationRecord | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const record: ReservationRecord = {
      id: crypto.randomUUID(),
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      date: String(data.get("date") || ""),
      time: String(data.get("time") || ""),
      guests: String(data.get("guests") || ""),
      notes: String(data.get("notes") || "").trim(),
      createdAt: new Date().toISOString(),
    };
    if (!record.name || !record.email || !record.date || !record.time) return;
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as ReservationRecord[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
    setSubmitted(record);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-elevated p-8">
        <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-fg">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-3xl text-fg">Request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you, {submitted.name}. We have {submitted.guests} guests on {submitted.date} at{" "}
          {submitted.time} held on this device. For an instant confirmed table, book on OpenTable
          — or call us after 4 PM.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={LINKS.opentable} target="_blank" rel="noreferrer">
              Confirm on OpenTable
            </a>
          </Button>
          <Button variant="outline" type="button" onClick={() => setSubmitted(null)}>
            Make another
          </Button>
        </div>
      </div>
    );
  }

  const field =
    "h-11 w-full rounded-sm border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none";
  const label = "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-subtle";

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="res-name">
          Full name
        </label>
        <input id="res-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="res-email">
          Email
        </label>
        <input id="res-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="res-phone">
          Phone
        </label>
        <input id="res-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="res-date">
          Date
        </label>
        <input
          id="res-date"
          name="date"
          type="date"
          required
          min={new Date().toISOString().slice(0, 10)}
          className={field}
        />
      </div>
      <div>
        <label className={label} htmlFor="res-time">
          Time
        </label>
        <select id="res-time" name="time" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a time
          </option>
          {TIME_SLOTS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="res-guests">
          Guests
        </label>
        <select id="res-guests" name="guests" required defaultValue="2" className={field}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="res-notes">
          Occasion / notes
        </label>
        <input id="res-notes" name="notes" className={field} placeholder="Birthday, window table…" />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Request a table
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-subtle">
          Dinner from 5PM weekdays; brunch from 11AM Saturday and Sunday. Parties of 10 or more:
          call {SITE.phoneDisplay} or email {SITE.email}. An 18% gratuity is added for groups of 8+.
        </p>
      </div>
    </form>
  );
}
