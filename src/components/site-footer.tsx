import { Link } from "@tanstack/react-router";
import { LINKS, NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-fg">Lavender Grill</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Heaven to the food lovers. A cozy place to eat and relax in Ottawa’s
            ByWard Market.
          </p>
          <p className="mt-6 text-sm text-muted">
            {SITE.addressLine}
            <br />
            {SITE.city}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={LINKS.uberEats} className="text-muted hover:text-fg" target="_blank" rel="noreferrer">
                Order on Uber Eats
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-fg">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`sms:${SITE.messageTel}`} className="hover:text-fg">
                Message {SITE.messageDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-fg">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={LINKS.instagram} className="hover:text-fg" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={LINKS.facebook} className="hover:text-fg" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-2 border-t border-border py-6 text-xs text-subtle md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {SITE.legal}</p>
        <p>Please call after 4 PM for same-day reservations. Parties of 10+ by phone or email.</p>
      </div>
    </footer>
  );
}
