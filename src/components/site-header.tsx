import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LINKS, NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-bg/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="hidden border-b border-border text-[11px] uppercase tracking-[0.18em] text-muted md:block">
        <div className="section-pad mx-auto flex h-9 max-w-7xl items-center justify-between">
          <span>
            {SITE.addressLine} · {SITE.city}
          </span>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-fg">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-[4.5rem]">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo-icon.png"
            alt=""
            className="size-10 rounded-full outline-none md:size-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-fg md:text-[1.35rem]">
              Lavender
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
              Grill & Lounge
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] transition-colors",
                pathname === item.to ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={LINKS.opentable} target="_blank" rel="noreferrer">
              Reserve
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="section-pad flex flex-col gap-1 py-6" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-12 items-center font-display text-3xl",
                  pathname === item.to ? "text-accent" : "text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={LINKS.uberEats}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex min-h-12 items-center text-sm uppercase tracking-[0.16em] text-muted"
            >
              Order online
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
