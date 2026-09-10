import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BRUNCH, DINNER, DRINKS, type MenuSection } from "@/lib/menu";
import { LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Lavender Grill" },
      {
        name: "description",
        content:
          "Dinner, drinks, and brunch at Lavender Grill & Lounge in Ottawa’s ByWard Market.",
      },
    ],
  }),
});

const TABS = [
  { id: "dinner", label: "Dinner", sections: DINNER },
  { id: "drinks", label: "Drinks", sections: DRINKS },
  { id: "brunch", label: "Brunch", sections: BRUNCH },
] as const;

function MenuPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("dinner");
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];

  return (
    <main id="main" className="pt-28 md:pt-32">
      <header className="section-pad mx-auto max-w-7xl pb-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent">The kitchen</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl">Menu</h1>
        <p className="mt-4 max-w-xl text-muted">
          Contemporary Canadian grill, lavender-kissed pasta, and a bar list built for a long
          evening in the Market. Prices in CAD. An 18% gratuity is added for parties of 8 or more.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Menu type">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-11 min-w-24 rounded-full px-5 text-[11px] uppercase tracking-[0.16em] transition-colors",
                tab === t.id
                  ? "bg-fg text-bg"
                  : "border border-border text-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {tab === "dinner" ? (
        <div className="section-pad mx-auto mb-12 grid max-w-7xl gap-3 sm:grid-cols-3">
          {[
            { src: "/images/gnocchi.jpg", alt: "Lavender gnocchi" },
            { src: "/images/steak.jpg", alt: "Filet mignon" },
            { src: "/images/cheesecake.jpg", alt: "House cheesecake" },
          ].map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          ))}
        </div>
      ) : tab === "drinks" ? (
        <div className="section-pad mx-auto mb-12 max-w-7xl">
          <img
            src="/images/cocktails.jpg"
            alt="Pomegranate margarita and lavender gin and tonic"
            className="h-64 w-full rounded-lg object-cover md:h-80"
          />
        </div>
      ) : (
        <div className="section-pad mx-auto mb-12 max-w-7xl">
          <img
            src="/images/mimosa.jpg"
            alt="Brunch mimosa"
            className="h-64 w-full rounded-lg object-cover object-top md:h-80"
          />
        </div>
      )}

      <div className="section-pad mx-auto max-w-3xl pb-24">
        {active.sections.map((section) => (
          <MenuBlock key={section.id} section={section} />
        ))}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted">Prefer to dine at home? Online orders are available.</p>
          <Button asChild variant="outline">
            <a href={LINKS.uberEats} target="_blank" rel="noreferrer">
              Order on Uber Eats
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <section className="mb-14">
      <h2 className="font-display text-3xl">{section.title}</h2>
      {section.intro ? <p className="mt-2 text-sm text-muted">{section.intro}</p> : null}
      <ul className="mt-6 divide-y divide-border">
        {section.items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="text-sm font-medium tracking-wide text-fg">
                {item.name}
                {item.featured ? (
                  <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-accent">
                    Signature
                  </span>
                ) : null}
              </p>
              {item.description ? (
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              ) : null}
            </div>
            <p className="shrink-0 font-display text-lg tabular-nums text-fg">{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
