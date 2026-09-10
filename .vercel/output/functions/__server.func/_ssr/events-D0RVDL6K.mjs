import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check } from "../_libs/lucide-react.mjs";
import { a as LINKS, n as Button, o as SITE } from "./router-DIgMy3L3.mjs";
import { n as OCCASIONS, r as REVIEWS, t as EVENTS } from "./content-BRDZKudD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-D0RVDL6K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "lavender-event-inquiries";
function EventForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	function onSubmit(e) {
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
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
		localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
		setName(record.name);
		setSent(true);
	}
	const field = "h-11 w-full rounded-sm border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none";
	const label = "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-subtle";
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-elevated p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-full bg-accent text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-5 font-display text-3xl",
				children: ["Inquiry sent, ", name]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"Our events team will be in touch to shape the menu, floor plan, and timing. For a faster reply, call ",
					SITE.phoneDisplay,
					" or email ",
					SITE.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				variant: "outline",
				type: "button",
				onClick: () => setSent(false),
				children: "Submit another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-name",
				children: "Name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "ev-name",
				name: "name",
				required: true,
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-email",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "ev-email",
				name: "email",
				type: "email",
				required: true,
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-phone",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "ev-phone",
				name: "phone",
				type: "tel",
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-date",
				children: "Preferred date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "ev-date",
				name: "date",
				type: "date",
				required: true,
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-guests",
				children: "Guest count"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "ev-guests",
				name: "guests",
				type: "number",
				min: 8,
				max: 80,
				required: true,
				placeholder: "e.g. 24",
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "ev-occ",
				children: "Occasion"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "ev-occ",
				name: "occasion",
				required: true,
				className: field,
				defaultValue: "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					disabled: true,
					children: "Select"
				}), OCCASIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: o,
					children: o
				}, o))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "ev-msg",
					children: "Tell us about the evening"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "ev-msg",
					name: "message",
					rows: 4,
					className: "w-full rounded-sm border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none",
					placeholder: "Dietary notes, décor, timing, budget…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					children: "Submit request"
				})
			})
		]
	});
}
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70dvh] overflow-hidden pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/event-hero.webp",
						alt: "A private celebration at Lavender Grill",
						className: "absolute inset-0 size-full object-cover outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-bg/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-[70dvh] flex-col justify-end px-5 pb-16 md:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.28em] text-accent",
								children: "The best private event host in Ottawa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-4xl font-display text-5xl md:text-7xl",
								children: "Elegant private dining in the Market."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-muted",
								children: "Curated menus, premium drinks, and a team that handles every detail — from the floor plan to a prayer space if you need one."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Celebrate in style"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "At Lavender Grill & Lounge we redefine what it means to host a private event in Ottawa. Whether it’s a corporate dinner, engagement party, or milestone celebration, our refined ambiance and exceptional service create a seamless experience for every guest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Located in the heart of the ByWard Market, the room works for intimate gatherings and larger evenings alike — guests have hosted up to 45 with a personalized menu. Halal options available."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2",
						children: [
							"Custom menus",
							"Corporate dinners",
							"Birthdays & milestones",
							"Bridal showers",
							"Cocktail-style nights",
							"Live jazz evenings"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l border-accent pl-3",
							children: item
						}, item))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.22em] text-subtle",
						children: "Submit a request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "Tell us about your evening"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventForm, {})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-pad mx-auto max-w-7xl py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "Also on the calendar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: EVENTS.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-bg p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-[0.18em] text-subtle",
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
									className: "mt-2 text-sm text-muted",
									children: ev.blurb
								})
							]
						}, ev.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto max-w-7xl py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "What guests love"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: [
									"“",
									r.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-4 text-[11px] uppercase tracking-[0.18em] text-accent",
								children: [r.name, " · Google"]
							})]
						}, r.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-sm text-muted",
						children: [
							"Prefer a table for two instead?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.opentable,
								className: "text-accent underline-offset-4 hover:underline",
								target: "_blank",
								rel: "noreferrer",
								children: "Reserve on OpenTable"
							}),
							"."
						]
					})
				]
			})
		]
	});
}
//#endregion
export { EventsPage as component };
