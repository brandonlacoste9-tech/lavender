import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Music2, l as ArrowRight, o as MapPin, r as Sparkles, s as Clock } from "../_libs/lucide-react.mjs";
import { a as LINKS, i as HOURS, n as Button, o as SITE } from "./router-DIgMy3L3.mjs";
import { r as REVIEWS, t as EVENTS } from "./content-BRDZKudD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dxw-E2Fs.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[100dvh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-orig.jpg",
						alt: "The dining room at Lavender Grill, candlelit tables under cascading lavender light",
						className: "absolute inset-0 size-full object-cover outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-[100dvh] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.32em] text-accent",
								children: SITE.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 max-w-4xl font-display text-5xl leading-[0.95] text-fg sm:text-7xl md:text-8xl",
								children: [
									"Heaven to the",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"food lovers."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg",
								children: "Casual-elegant dining in Ottawa’s ByWard Market. Grilled steaks, lavender pasta, live jazz, and a complimentary mimosa with every brunch."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: LINKS.opentable,
										target: "_blank",
										rel: "noreferrer",
										children: "Make a reservation"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/menu",
										children: "View the menu"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-xs text-subtle",
								children: [
									"For 10+ guests, call ",
									SITE.phoneDisplay,
									" or email ",
									SITE.email,
									"."
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto max-w-7xl py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.28em] text-accent",
							children: "Upcoming"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "This season at Lavender"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events",
							className: "hidden items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-fg md:inline-flex",
							children: ["All events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: EVENTS.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-5 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-[11px] uppercase tracking-[0.2em] text-subtle",
									children: [
										ev.date,
										" · ",
										ev.time
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl",
									children: ev.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: ev.blurb
								})
							]
						}, ev.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl bg-elevated px-6 py-5 md:flex md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Monday Open"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm text-muted",
							children: "Starting June 1st for the summer, we’re now open Mondays too. Enjoy Lavender Grill 7 days a week all summer long."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-4 md:mt-0",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.opentable,
								target: "_blank",
								rel: "noreferrer",
								children: "Reserve your spot"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/interior-orig.jpg",
					alt: "Lavender Membership Club dining room",
					className: "h-72 w-full object-cover outline-none md:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center bg-surface px-6 py-16 md:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.28em] text-accent",
							children: "Membership Club"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "Your visits, rewarded beautifully"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
							children: "Earn complimentary drinks, desserts, appetizers, and entrées just for dining with us. Simple, effortless, and beautifully rewarding. Gifts are collectible Tuesday through Thursday — reservation under your name."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/membership",
									children: "See all rewards"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKS.membershipJoin,
									target: "_blank",
									rel: "noreferrer",
									children: "Join now"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "ByWard Market"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl md:text-5xl",
						children: "Amazing taste in Ottawa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted",
						children: "Located at 47 Clarence St. Unit 101–102, Lavender Grill is a bar and grill with high-quality meals for every taste. Dine in under the lavender lights, take a table on a celebration night, or order in from home."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Signatures include Lavender Gnocchi, Lavender Ravioli, grilled salmon, and perfectly cooked steaks — with a pomegranate margarita or lavender gin & tonic to match."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.opentable,
							target: "_blank",
							rel: "noreferrer",
							children: "Make a reservation"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/gnocchi.jpg",
						alt: "Lavender gnocchi in cream sauce",
						className: "h-56 w-full rounded-lg object-cover md:h-72"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/steak.jpg",
						alt: "Grilled filet mignon",
						className: "mt-8 h-56 w-full rounded-lg object-cover md:h-72"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-pad mx-auto max-w-7xl py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.28em] text-accent",
									children: "Private events"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl md:text-5xl",
									children: "Host your private event at Lavender"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted",
									children: "A beautifully curated setting, exceptional cuisine, and seamless service. Corporate gatherings, birthdays, engagements, bridal showers — our team brings the evening to life, including halal menus and custom floor plans."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-3",
							children: REVIEWS.slice(0, 3).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-xl border border-border bg-bg p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: [
										"“",
										r.quote,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
									className: "mt-5 text-[11px] uppercase tracking-[0.18em] text-accent",
									children: r.name
								})]
							}, r.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events",
								children: "Plan an event"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/mimosa.jpg",
						alt: "A complimentary mimosa at brunch",
						className: "absolute inset-0 size-full object-cover outline-none"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-6 py-16 md:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Mimosa with every brunch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-base leading-relaxed text-muted",
							children: "Every brunch at Lavender Grill & Lounge comes with a complimentary Mimosa, on the house. Whether you’re catching up with friends or enjoying a quiet midday escape, let us add a little sparkle to your table. Saturday and Sunday, 11AM – 3PM."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.opentable,
								target: "_blank",
								rel: "noreferrer",
								children: "Make a reservation"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Opening hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 divide-y divide-border border-y border-border",
						children: HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: h.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-fg",
								children: h.hours
							})]
						}, h.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }),
								SITE.addressLine,
								", ",
								SITE.city
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-accent" }), "Please call after 4 PM for reservations"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Lavender Grill in ByWard Market",
						src: LINKS.mapsEmbed,
						className: "h-80 w-full border-0 md:h-full min-h-80",
						loading: "lazy"
					})
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
