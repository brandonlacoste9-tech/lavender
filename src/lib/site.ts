export const SITE = {
  name: "Lavender Grill",
  fullName: "Lavender Grill & Lounge",
  tagline: "A Taste From Ottawa",
  headline: "Best restaurant in Ottawa",
  description:
    "Nestled in the heart of Ottawa’s historic ByWard Market, Lavender Grill & Lounge offers an elegant yet welcoming dining experience with cascading lavender accents and a warm ambiance.",
  addressLine: "47 Clarence St, Unit 101 & 102",
  city: "Ottawa, ON K1N 9K1",
  neighborhood: "ByWard Market",
  phoneDisplay: "+1 613 569 6605",
  phoneTel: "+16135696605",
  messageDisplay: "+1 613 265 8477",
  messageTel: "+16132658477",
  email: "info@lavendergrill.com",
  legal: "2819722 Ontario Limited (Lavender Grill and Lounge Restaurant)",
};

export const LINKS = {
  opentable:
    "https://www.opentable.ca/r/lavender-grill-and-lounge-reservations-ottawa?restref=1229302&lang=en-CA&ot_source=Restaurant%20website",
  membershipJoin: "https://www.opentable.com/restaurant/profile/1229302/membership",
  uberEats: "https://www.ubereats.com/ca/store/lavender-grill/HHrhaPmWWryd3c64Wrs1ew",
  instagram: "https://www.instagram.com/lavendergrill/",
  facebook: "https://www.facebook.com/Lavendergrillcanada",
  maps: "https://maps.google.com/?q=47+Clarence+St+Ottawa+ON+K1N+9K1",
  mapsEmbed:
    "https://maps.google.com/maps?q=47%20Clarence%20St%20Ottawa%20ON&t=&z=16&ie=UTF8&iwloc=&output=embed",
  tripadvisor:
    "https://www.tripadvisor.ca/Restaurant_Review-g155004-d23723024-Reviews-Lavender_Grill_Lounge-Ottawa_Ontario.html",
};

export const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "5PM – 12AM" },
  { day: "Tuesday", hours: "5PM – 12AM" },
  { day: "Wednesday", hours: "5PM – 12AM" },
  { day: "Thursday", hours: "5PM – 12AM" },
  { day: "Friday", hours: "5PM – 12AM" },
  { day: "Saturday", hours: "11AM – 12AM" },
  { day: "Sunday", hours: "11AM – 12AM" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Private Events" },
  { to: "/reserve", label: "Reserve" },
] as const;
