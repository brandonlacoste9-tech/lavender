import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check } from "../_libs/lucide-react.mjs";
import { a as LINKS, i as HOURS, n as Button, o as SITE, r as cn } from "./router-DIgMy3L3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reserve-DLgbErvJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "lavender-reservations";
var TIME_SLOTS = (() => {
	const slots = [];
	for (let h = 11; h <= 23; h++) for (const m of [0, 30]) {
		if (h === 23 && m === 30) continue;
		const hour12 = (h + 11) % 12 + 1;
		const ampm = h >= 12 ? "PM" : "AM";
		slots.push(`${hour12}:${m === 0 ? "00" : "30"} ${ampm}`);
	}
	return slots;
})();
function ReservationForm({ compact = false }) {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const record = {
			id: crypto.randomUUID(),
			name: String(data.get("name") || "").trim(),
			email: String(data.get("email") || "").trim(),
			phone: String(data.get("phone") || "").trim(),
			date: String(data.get("date") || ""),
			time: String(data.get("time") || ""),
			guests: String(data.get("guests") || ""),
			notes: String(data.get("notes") || "").trim(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (!record.name || !record.email || !record.date || !record.time) return;
		const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
		localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
		setSubmitted(record);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-elevated p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-full bg-accent text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-3xl text-fg",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"Thank you, ",
					submitted.name,
					". We have ",
					submitted.guests,
					" guests on ",
					submitted.date,
					" at",
					" ",
					submitted.time,
					" held on this device. For an instant confirmed table, book on OpenTable — or call us after 4 PM."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: LINKS.opentable,
						target: "_blank",
						rel: "noreferrer",
						children: "Confirm on OpenTable"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					type: "button",
					onClick: () => setSubmitted(null),
					children: "Make another"
				})]
			})
		]
	});
	const field = "h-11 w-full rounded-sm border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none";
	const label = "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-subtle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("grid gap-4", compact ? "" : "sm:grid-cols-2"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: label,
					htmlFor: "res-name",
					children: "Full name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "res-name",
					name: "name",
					required: true,
					autoComplete: "name",
					className: field
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-email",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "res-email",
				name: "email",
				type: "email",
				required: true,
				autoComplete: "email",
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-phone",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "res-phone",
				name: "phone",
				type: "tel",
				autoComplete: "tel",
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-date",
				children: "Date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "res-date",
				name: "date",
				type: "date",
				required: true,
				min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				className: field
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-time",
				children: "Time"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "res-time",
				name: "time",
				required: true,
				defaultValue: "",
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					disabled: true,
					children: "Select a time"
				}), TIME_SLOTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: t,
					children: t
				}, t))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-guests",
				children: "Guests"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "res-guests",
				name: "guests",
				required: true,
				defaultValue: "2",
				className: field,
				children: Array.from({ length: 12 }, (_, i) => i + 1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: String(n),
					children: [
						n,
						" ",
						n === 1 ? "guest" : "guests"
					]
				}, n))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: label,
				htmlFor: "res-notes",
				children: "Occasion / notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "res-notes",
				name: "notes",
				className: field,
				placeholder: "Birthday, window table…"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full sm:w-auto",
					children: "Request a table"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs leading-relaxed text-subtle",
					children: [
						"Dinner from 5PM weekdays; brunch from 11AM Saturday and Sunday. Parties of 10 or more: call ",
						SITE.phoneDisplay,
						" or email ",
						SITE.email,
						". An 18% gratuity is added for groups of 8+."
					]
				})]
			})
		]
	});
}
function ReservePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "main",
		className: "pt-28 md:pt-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-pad mx-auto grid max-w-7xl gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-accent",
					children: "ByWard Market"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Reserve a table"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "Create memorable moments. We’re here to answer any question you may have — or book instantly on OpenTable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationForm, {})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-border bg-surface p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							SITE.addressLine,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							SITE.city,
							", Canada"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Call",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg hover:text-accent",
								href: `tel:${SITE.phoneTel}`,
								children: SITE.phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Message",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg hover:text-accent",
								href: `sms:${SITE.messageTel}`,
								children: SITE.messageDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg hover:text-accent",
								href: `mailto:${SITE.email}`,
								children: SITE.email
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-subtle",
						children: "Please call us after 4 PM for reservations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: LINKS.opentable,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex h-11 items-center text-[11px] uppercase tracking-[0.16em] text-accent hover:text-fg",
						children: "Instant book on OpenTable"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 text-[11px] uppercase tracking-[0.2em] text-subtle",
						children: "Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-border",
						children: HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: h.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: h.hours
							})]
						}, h.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map of Lavender Grill",
							src: LINKS.mapsEmbed,
							className: "h-48 w-full border-0",
							loading: "lazy"
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { ReservePage as component };
