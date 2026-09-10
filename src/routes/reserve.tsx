import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "@/components/reservation-form";
import { HOURS, LINKS, SITE } from "@/lib/site";

export const Route = createFileRoute("/reserve")({
  component: ReservePage,
  head: () => ({
    meta: [
      { title: "Reserve — Lavender Grill" },
      {
        name: "description",
        content: "Reserve a table at Lavender Grill & Lounge, 47 Clarence Street, Ottawa.",
      },
    ],
  }),
});

function ReservePage() {
  return (
    <main id="main" className="pt-28 md:pt-32">
      <div className="section-pad mx-auto grid max-w-7xl gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">ByWard Market</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Reserve a table</h1>
          <p className="mt-4 max-w-xl text-muted">
            Create memorable moments. We’re here to answer any question you may have — or book
            instantly on OpenTable.
          </p>
          <div className="mt-10">
            <ReservationForm />
          </div>
        </div>
        <aside className="h-fit rounded-xl border border-border bg-surface p-8">
          <h2 className="font-display text-2xl">Visit</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {SITE.addressLine}
            <br />
            {SITE.city}, Canada
          </p>
          <p className="mt-4 text-sm text-muted">
            Call{" "}
            <a className="text-fg hover:text-accent" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            <br />
            Message{" "}
            <a className="text-fg hover:text-accent" href={`sms:${SITE.messageTel}`}>
              {SITE.messageDisplay}
            </a>
            <br />
            <a className="text-fg hover:text-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="mt-4 text-xs text-subtle">Please call us after 4 PM for reservations.</p>
          <a
            href={LINKS.opentable}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center text-[11px] uppercase tracking-[0.16em] text-accent hover:text-fg"
          >
            Instant book on OpenTable
          </a>
          <h3 className="mt-10 text-[11px] uppercase tracking-[0.2em] text-subtle">Hours</h3>
          <ul className="mt-3 divide-y divide-border">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between py-2 text-sm">
                <span className="text-muted">{h.day}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 overflow-hidden rounded-lg">
            <iframe
              title="Map of Lavender Grill"
              src={LINKS.mapsEmbed}
              className="h-48 w-full border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
