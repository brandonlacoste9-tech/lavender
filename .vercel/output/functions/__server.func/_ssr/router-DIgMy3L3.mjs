import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DIgMy3L3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SITE = {
	name: "Lavender Grill",
	fullName: "Lavender Grill & Lounge",
	tagline: "A Taste From Ottawa",
	headline: "Best restaurant in Ottawa",
	description: "Nestled in the heart of Ottawa’s historic ByWard Market, Lavender Grill & Lounge offers an elegant yet welcoming dining experience with cascading lavender accents and a warm ambiance.",
	addressLine: "47 Clarence St, Unit 101 & 102",
	city: "Ottawa, ON K1N 9K1",
	neighborhood: "ByWard Market",
	phoneDisplay: "+1 613 569 6605",
	phoneTel: "+16135696605",
	messageDisplay: "+1 613 265 8477",
	messageTel: "+16132658477",
	email: "info@lavendergrill.com",
	legal: "2819722 Ontario Limited (Lavender Grill and Lounge Restaurant)"
};
var LINKS = {
	opentable: "https://www.opentable.ca/r/lavender-grill-and-lounge-reservations-ottawa?restref=1229302&lang=en-CA&ot_source=Restaurant%20website",
	membershipJoin: "https://www.opentable.com/restaurant/profile/1229302/membership",
	uberEats: "https://www.ubereats.com/ca/store/lavender-grill/HHrhaPmWWryd3c64Wrs1ew",
	instagram: "https://www.instagram.com/lavendergrill/",
	facebook: "https://www.facebook.com/Lavendergrillcanada",
	maps: "https://maps.google.com/?q=47+Clarence+St+Ottawa+ON+K1N+9K1",
	mapsEmbed: "https://maps.google.com/maps?q=47%20Clarence%20St%20Ottawa%20ON&t=&z=16&ie=UTF8&iwloc=&output=embed",
	tripadvisor: "https://www.tripadvisor.ca/Restaurant_Review-g155004-d23723024-Reviews-Lavender_Grill_Lounge-Ottawa_Ontario.html"
};
var HOURS = [
	{
		day: "Monday",
		hours: "5PM – 12AM"
	},
	{
		day: "Tuesday",
		hours: "5PM – 12AM"
	},
	{
		day: "Wednesday",
		hours: "5PM – 12AM"
	},
	{
		day: "Thursday",
		hours: "5PM – 12AM"
	},
	{
		day: "Friday",
		hours: "5PM – 12AM"
	},
	{
		day: "Saturday",
		hours: "11AM – 12AM"
	},
	{
		day: "Sunday",
		hours: "11AM – 12AM"
	}
];
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/membership",
		label: "Membership"
	},
	{
		to: "/events",
		label: "Private Events"
	},
	{
		to: "/reserve",
		label: "Reserve"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-fg",
							children: "Lavender Grill"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm leading-relaxed text-muted",
							children: "Heaven to the food lovers. A cozy place to eat and relax in Ottawa’s ByWard Market."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-muted",
							children: [
								SITE.addressLine,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								SITE.city
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.2em] text-subtle",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-muted hover:text-fg",
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: LINKS.uberEats,
						className: "text-muted hover:text-fg",
						target: "_blank",
						rel: "noreferrer",
						children: "Order on Uber Eats"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.2em] text-subtle",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${SITE.phoneTel}`,
							className: "hover:text-fg",
							children: SITE.phoneDisplay
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `sms:${SITE.messageTel}`,
							className: "hover:text-fg",
							children: ["Message ", SITE.messageDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SITE.email}`,
							className: "hover:text-fg",
							children: SITE.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.instagram,
							className: "hover:text-fg",
							target: "_blank",
							rel: "noreferrer",
							children: "Instagram"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.facebook,
							className: "hover:text-fg",
							target: "_blank",
							rel: "noreferrer",
							children: "Facebook"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-pad mx-auto flex max-w-7xl flex-col gap-2 border-t border-border py-6 text-xs text-subtle md:flex-row md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				SITE.legal
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Please call after 4 PM for same-day reservations. Parties of 10+ by phone or email." })]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:bg-accent hover:text-accent-fg",
			accent: "bg-accent text-accent-fg hover:bg-fg",
			outline: "border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent",
			ghost: "bg-transparent text-fg hover:text-accent",
			inverse: "bg-bg text-fg hover:bg-elevated"
		},
		size: {
			sm: "h-10 rounded-sm px-4 text-xs uppercase tracking-[0.14em]",
			md: "h-11 rounded-sm px-5 text-xs uppercase tracking-[0.16em]",
			lg: "h-12 rounded-md px-7 text-xs uppercase tracking-[0.18em]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled || open || pathname !== "/" ? "bg-bg/92 backdrop-blur-md" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-border text-[11px] uppercase tracking-[0.18em] text-muted md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-pad mx-auto flex h-9 max-w-7xl items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						SITE.addressLine,
						" · ",
						SITE.city
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${SITE.phoneTel}`,
						className: "hover:text-fg",
						children: SITE.phoneDisplay
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-[4.5rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo-icon.png",
							alt: "",
							className: "size-10 rounded-full outline-none md:size-12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-wide text-fg md:text-[1.35rem]",
								children: "Lavender"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.28em] text-muted",
								children: "Grill & Lounge"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("text-[11px] uppercase tracking-[0.2em] transition-colors", pathname === item.to ? "text-accent" : "text-muted hover:text-fg"),
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.opentable,
								target: "_blank",
								rel: "noreferrer",
								children: "Reserve"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center text-fg lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-bg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "section-pad flex flex-col gap-1 py-6",
					"aria-label": "Mobile",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("flex min-h-12 items-center font-display text-3xl", pathname === item.to ? "text-accent" : "text-fg"),
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: LINKS.uberEats,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 flex min-h-12 items-center text-sm uppercase tracking-[0.16em] text-muted",
						children: "Order online"
					})]
				})
			}) : null
		]
	});
}
var styles_default = "/assets/styles-BDE1jeCC.css";
var APP_NAME = "Lavender Grill";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Lavender Grill & Lounge — elegant dining in Ottawa’s ByWard Market. Reservations, private events, brunch with complimentary mimosa, and the Lavender Membership Club."
			},
			{
				name: "theme-color",
				content: "#0c0a0d"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Dxw-E2Fs.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./events-D0RVDL6K.mjs");
var Route$3 = createFileRoute("/events")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Private Events — Lavender Grill" }, {
		name: "description",
		content: "Host birthdays, corporate dinners, bridal showers, and celebrations at Lavender Grill & Lounge in Ottawa."
	}] })
});
var $$splitComponentImporter$2 = () => import("./membership-luyzuD7R.mjs");
var Route$2 = createFileRoute("/membership")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Membership Club — Lavender Grill" }, {
		name: "description",
		content: "Join the Lavender Membership Club. Complimentary drinks, desserts, appetizers, and entrées for regulars."
	}] })
});
var $$splitComponentImporter$1 = () => import("./menu-qzMaUyCc.mjs");
var Route$1 = createFileRoute("/menu")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Menu — Lavender Grill" }, {
		name: "description",
		content: "Dinner, drinks, and brunch at Lavender Grill & Lounge in Ottawa’s ByWard Market."
	}] })
});
var $$splitComponentImporter = () => import("./reserve-DLgbErvJ.mjs");
var Route = createFileRoute("/reserve")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Reserve — Lavender Grill" }, {
		name: "description",
		content: "Reserve a table at Lavender Grill & Lounge, 47 Clarence Street, Ottawa."
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	EventsRoute: Route$3.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$5
	}),
	MembershipRoute: Route$2.update({
		id: "/membership",
		path: "/membership",
		getParentRoute: () => Route$5
	}),
	MenuRoute: Route$1.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$5
	}),
	ReserveRoute: Route.update({
		id: "/reserve",
		path: "/reserve",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { LINKS as a, HOURS as i, Button as n, SITE as o, cn as r, router_exports as t };
