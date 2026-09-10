import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { REWARDS } from "@/lib/content";
import { LINKS } from "@/lib/site";

export const Route = createFileRoute("/membership")({
  component: MembershipPage,
  head: () => ({
    meta: [
      { title: "Membership Club — Lavender Grill" },
      {
        name: "description",
        content:
          "Join the Lavender Membership Club. Complimentary drinks, desserts, appetizers, and entrées for regulars.",
      },
    ],
  }),
});

function MembershipPage() {
  return (
    <main id="main">
      <section className="relative min-h-[70dvh] overflow-hidden pt-28">
        <img
          src="/images/interior-orig.jpg"
          alt="The dining room at Lavender Grill"
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
        <div className="relative flex min-h-[70dvh] flex-col justify-end px-5 pb-16 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Loyalty</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl">
            Where loyalty meets indulgence.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Join our exclusive rewards program and savor the perks of being a regular — from your
            first gifted drink to a free entrée.
          </p>
          <Button asChild size="lg" className="mt-8 w-fit">
            <a href={LINKS.membershipJoin} target="_blank" rel="noreferrer">
              Join now
            </a>
          </Button>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent">How it works</p>
        <h2 className="mt-3 font-display text-4xl">Lavender Loyalty Rewards</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Gifts are collectible only on Tuesdays, Wednesdays, and Thursdays. To redeem, the
          reservation must be under your name. Rewards reset on a 12-month window.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REWARDS.map((r, i) => (
            <article key={r.title} className="overflow-hidden rounded-xl border border-border bg-surface">
              <img src={r.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                  0{i + 1} · {r.visits}
                </p>
                <h3 className="mt-2 font-display text-2xl">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.detail}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-subtle">{r.when}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-7xl items-center gap-10 pb-24 md:grid-cols-2">
        <img
          src="/images/food-spread.jpg"
          alt="A table of dishes at Lavender Grill"
          className="h-80 w-full rounded-xl object-cover"
        />
        <div>
          <h2 className="font-display text-4xl">Post. Tag. Surprise.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Share your Lavender moment on Instagram or TikTok and tag us @lavendergrill. You’ll
            receive a surprise offer as our way of saying thanks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={LINKS.membershipJoin} target="_blank" rel="noreferrer">
                Join the club
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
