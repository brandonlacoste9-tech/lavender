import { createFileRoute } from "@tanstack/react-router";
import { EventForm } from "@/components/event-form";
import { EVENTS, REVIEWS } from "@/lib/content";
import { LINKS } from "@/lib/site";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Private Events — Lavender Grill" },
      {
        name: "description",
        content:
          "Host birthdays, corporate dinners, bridal showers, and celebrations at Lavender Grill & Lounge in Ottawa.",
      },
    ],
  }),
});

function EventsPage() {
  return (
    <main id="main">
      <section className="relative min-h-[70dvh] overflow-hidden pt-28">
        <img
          src="/images/event-hero.webp"
          alt="A private celebration at Lavender Grill"
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-bg/30" />
        <div className="relative flex min-h-[70dvh] flex-col justify-end px-5 pb-16 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
            The best private event host in Ottawa
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-7xl">
            Elegant private dining in the Market.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Curated menus, premium drinks, and a team that handles every detail — from the floor
            plan to a prayer space if you need one.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">Celebrate in style</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            At Lavender Grill & Lounge we redefine what it means to host a private event in
            Ottawa. Whether it’s a corporate dinner, engagement party, or milestone celebration,
            our refined ambiance and exceptional service create a seamless experience for every
            guest.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Located in the heart of the ByWard Market, the room works for intimate gatherings and
            larger evenings alike — guests have hosted up to 45 with a personalized menu. Halal
            options available.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
            {[
              "Custom menus",
              "Corporate dinners",
              "Birthdays & milestones",
              "Bridal showers",
              "Cocktail-style nights",
              "Live jazz evenings",
            ].map((item) => (
              <li key={item} className="border-l border-accent pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-subtle">Submit a request</p>
          <h2 className="mt-2 font-display text-3xl">Tell us about your evening</h2>
          <div className="mt-6">
            <EventForm />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="section-pad mx-auto max-w-7xl py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Also on the calendar</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {EVENTS.map((ev) => (
              <article key={ev.id} className="rounded-xl border border-border bg-bg p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
                  {ev.date} · {ev.time}
                </p>
                <h3 className="mt-2 font-display text-2xl">{ev.title}</h3>
                <p className="mt-2 text-sm text-muted">{ev.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20">
        <h2 className="font-display text-4xl">What guests love</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="rounded-xl border border-border bg-surface p-6">
              <p className="text-sm leading-relaxed text-muted">“{r.quote}”</p>
              <footer className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accent">
                {r.name} · Google
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Prefer a table for two instead?{" "}
          <a href={LINKS.opentable} className="text-accent underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            Reserve on OpenTable
          </a>
          .
        </p>
      </section>
    </main>
  );
}
