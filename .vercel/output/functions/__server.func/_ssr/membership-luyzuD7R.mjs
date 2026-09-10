import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LINKS, n as Button } from "./router-DIgMy3L3.mjs";
import { i as REWARDS } from "./content-BRDZKudD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membership-luyzuD7R.js
var import_jsx_runtime = require_jsx_runtime();
function MembershipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70dvh] overflow-hidden pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/interior-orig.jpg",
						alt: "The dining room at Lavender Grill",
						className: "absolute inset-0 size-full object-cover outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-[70dvh] flex-col justify-end px-5 pb-16 md:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.28em] text-accent",
								children: "Loyalty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-3xl font-display text-5xl md:text-7xl",
								children: "Where loyalty meets indulgence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-muted",
								children: "Join our exclusive rewards program and savor the perks of being a regular — from your first gifted drink to a free entrée."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "mt-8 w-fit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKS.membershipJoin,
									target: "_blank",
									rel: "noreferrer",
									children: "Join now"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto max-w-7xl py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Lavender Loyalty Rewards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm text-muted",
						children: "Gifts are collectible only on Tuesdays, Wednesdays, and Thursdays. To redeem, the reservation must be under your name. Rewards reset on a 12-month window."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: REWARDS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-xl border border-border bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.image,
								alt: "",
								className: "h-48 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] uppercase tracking-[0.18em] text-accent",
										children: [
											"0",
											i + 1,
											" · ",
											r.visits
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: r.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs uppercase tracking-[0.14em] text-subtle",
										children: r.when
									})
								]
							})]
						}, r.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-pad mx-auto grid max-w-7xl items-center gap-10 pb-24 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/food-spread.jpg",
					alt: "A table of dishes at Lavender Grill",
					className: "h-80 w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Post. Tag. Surprise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Share your Lavender moment on Instagram or TikTok and tag us @lavendergrill. You’ll receive a surprise offer as our way of saying thanks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.membershipJoin,
								target: "_blank",
								rel: "noreferrer",
								children: "Join the club"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.instagram,
								target: "_blank",
								rel: "noreferrer",
								children: "Follow on Instagram"
							})
						})]
					})
				] })]
			})
		]
	});
}
//#endregion
export { MembershipPage as component };
