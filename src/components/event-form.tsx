import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OCCASIONS } from "@/lib/content";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "lavender-event-inquiries";

export function EventForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      id: crypto.randomUUID(),
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      date: String(data.get("date") || ""),
      guests: String(data.get("guests") || ""),
      occasion: String(data.get("occasion") || ""),
      message: String(data.get("message") || "").trim(),
      createdAt: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
    setName(record.name);
    setSent(true);
  }

  const field =
    "h-11 w-full rounded-sm border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none";
  const label = "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-subtle";

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-elevated p-8">
        <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-fg">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-3xl">Inquiry sent, {name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Our events team will be in touch to shape the menu, floor plan, and timing. For a faster
          reply, call {SITE.phoneDisplay} or email {SITE.email}.
        </p>
        <Button className="mt-6" variant="outline" type="button" onClick={() => setSent(false)}>
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="ev-name">
          Name
        </label>
        <input id="ev-name" name="name" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="ev-email">
          Email
        </label>
        <input id="ev-email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="ev-phone">
          Phone
        </label>
        <input id="ev-phone" name="phone" type="tel" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="ev-date">
          Preferred date
        </label>
        <input id="ev-date" name="date" type="date" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="ev-guests">
          Guest count
        </label>
        <input
          id="ev-guests"
          name="guests"
          type="number"
          min={8}
          max={80}
          required
          placeholder="e.g. 24"
          className={field}
        />
      </div>
      <div>
        <label className={label} htmlFor="ev-occ">
          Occasion
        </label>
        <select id="ev-occ" name="occasion" required className={field} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {OCCASIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="ev-msg">
          Tell us about the evening
        </label>
        <textarea
          id="ev-msg"
          name="message"
          rows={4}
          className="w-full rounded-sm border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none"
          placeholder="Dietary notes, décor, timing, budget…"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">
          Submit request
        </Button>
      </div>
    </form>
  );
}
