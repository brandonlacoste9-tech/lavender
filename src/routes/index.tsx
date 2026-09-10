import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Music2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENTS, REVIEWS } from "@/lib/content";
import { HOURS, LINKS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main id="main">
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src="/images/hero-orig.jpg"
          alt="The dining room at Lavender Grill, candlelit tables under cascading lavender light"
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="relative flex min-h-[100dvh] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">{SITE.tagline}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] text-fg sm:text-7xl md:text-8xl">
            Heaven to the
            <br />
            food lovers.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Casual-elegant dining in Ottawa’s ByWard Market. Grilled steaks, lavender pasta, live
            jazz, and a complimentary mimosa with every brunch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={LINKS.opentable} target="_blank" rel="noreferrer">
                Make a reservation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/menu">View the menu</Link>
            </Button>
          </div>
          <p className="mt-5 text-xs text-subtle">
            For 10+ guests, call {SITE.phoneDisplay} or email {SITE.email}.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Upcoming</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">This season at Lavender</h2>
          </div>
          <Link
            to="/events"
            className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-fg md:inline-flex"
          >
            All events <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {EVENTS.map((ev) => (
            <article
              key={ev.id}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <Music2 className="size-5 text-accent" />
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-subtle">
                {ev.date} · {ev.time}
              </p>
              <h3 className="mt-2 font-display text-2xl">{ev.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ev.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-elevated px-6 py-5 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Monday Open</p>
            <p className="mt-1 max-w-xl text-sm text-muted">
              Starting June 1st for the summer, we’re now open Mondays too. Enjoy Lavender Grill 7
              days a week all summer long.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0" variant="outline">
            <a href={LINKS.opentable} target="_blank" rel="noreferrer">
              Reserve your spot
            </a>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img
          src="/images/interior-orig.jpg"
          alt="Lavender Membership Club dining room"
          className="h-72 w-full object-cover outline-none md:h-full"
        />
        <div className="flex flex-col justify-center bg-surface px-6 py-16 md:px-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Membership Club</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Your visits, rewarded beautifully</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Earn complimentary drinks, desserts, appetizers, and entrées just for dining with us.
            Simple, effortless, and beautifully rewarding. Gifts are collectible Tuesday through
            Thursday — reservation under your name.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/membership">See all rewards</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={LINKS.membershipJoin} target="_blank" rel="noreferrer">
                Join now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">ByWard Market</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Amazing taste in Ottawa.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Located at 47 Clarence St. Unit 101–102, Lavender Grill is a bar and grill with
            high-quality meals for every taste. Dine in under the lavender lights, take a table on
            a celebration night, or order in from home.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Signatures include Lavender Gnocchi, Lavender Ravioli, grilled salmon, and perfectly
            cooked steaks — with a pomegranate margarita or lavender gin & tonic to match.
          </p>
          <Button asChild className="mt-8">
            <a href={LINKS.opentable} target="_blank" rel="noreferrer">
              Make a reservation
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/gnocchi.jpg"
            alt="Lavender gnocchi in cream sauce"
            className="h-56 w-full rounded-lg object-cover md:h-72"
          />
          <img
            src="/images/steak.jpg"
            alt="Grilled filet mignon"
            className="mt-8 h-56 w-full rounded-lg object-cover md:h-72"
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="section-pad mx-auto max-w-7xl py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Private events</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Host your private event at Lavender
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A beautifully curated setting, exceptional cuisine, and seamless service. Corporate
              gatherings, birthdays, engagements, bridal showers — our team brings the evening to
              life, including halal menus and custom floor plans.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => (
              <blockquote
                key={r.name}
                className="rounded-xl border border-border bg-bg p-6"
              >
                <p className="text-sm leading-relaxed text-muted">“{r.quote}”</p>
                <footer className="mt-5 text-[11px] uppercase tracking-[0.18em] text-accent">
                  {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/events">Plan an event</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src="/images/mimosa.jpg"
            alt="A complimentary mimosa at brunch"
            className="absolute inset-0 size-full object-cover outline-none"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <Sparkles className="size-5 text-accent" />
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Mimosa with every brunch</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Every brunch at Lavender Grill & Lounge comes with a complimentary Mimosa, on the
            house. Whether you’re catching up with friends or enjoying a quiet midday escape, let
            us add a little sparkle to your table. Saturday and Sunday, 11AM – 3PM.
          </p>
          <Button asChild className="mt-8">
            <a href={LINKS.opentable} target="_blank" rel="noreferrer">
              Make a reservation
            </a>
          </Button>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Hours</p>
          <h2 className="mt-3 font-display text-4xl">Opening hours</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                <span className="text-muted">{h.day}</span>
                <span className="tabular-nums text-fg">{h.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 text-sm text-muted">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              {SITE.addressLine}, {SITE.city}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-accent" />
              Please call after 4 PM for reservations
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Map of Lavender Grill in ByWard Market"
            src={LINKS.mapsEmbed}
            className="h-80 w-full border-0 md:h-full min-h-80"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
