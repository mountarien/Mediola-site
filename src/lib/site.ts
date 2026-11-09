// Public address of the site, used for canonical URLs, the sitemap and
// social previews. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain
// is attached (e.g. "https://www.mediola.ae"), with no trailing slash.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mediola-site.vercel.app"
).replace(/\/+$/, "");

// Single place for company contact details and shared content.
// TODO: fill in real contact details before launch. Empty values are hidden in the UI.
export const contact = {
  phone: "", // e.g. "+971 50 000 0000"
  whatsapp: "", // digits only, e.g. "971500000000"
  email: "", // e.g. "hello@mediola.ae"
  city: "Dubai, UAE",
};

export function whatsappLink(message = "Hi Mediola, I'd like to know more about making my home smart.") {
  if (!contact.whatsapp) return null;
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Home = {
  name: string;
  slug: string;
  status: "Completed" | "Ongoing";
  area: string;
  cover: string;
  shots: { src: string; label: string }[];
};

const completed = "/mediola_projects/completed_projects";
const ongoing = "/mediola_projects/ongoing_projects";

export const homes: Home[] = [
  {
    name: "The Paragon",
    slug: "paragon",
    status: "Completed",
    area: "Dubai",
    cover: `${completed}/paragon-living.jpg`,
    shots: [
      { src: `${completed}/paragon-exterior.jpg`, label: "Exterior" },
      { src: `${completed}/paragon-reception.jpg`, label: "Reception" },
      { src: `${completed}/paragon-living.jpg`, label: "Living room" },
      { src: `${completed}/paragon-bedroom.jpg`, label: "Bedroom" },
    ],
  },
  {
    name: "Society House",
    slug: "society",
    status: "Completed",
    area: "Dubai",
    cover: `${completed}/society-exterior.jpg`,
    shots: [
      { src: `${completed}/society-exterior.jpg`, label: "Exterior" },
      { src: `${completed}/society-reception.jpg`, label: "Reception" },
      { src: `${completed}/SocietyHouse_Swimming_Pool.jpg`, label: "Pool deck" },
    ],
  },
  {
    name: "Pelagos",
    slug: "pelagos",
    status: "Ongoing",
    area: "Dubai",
    cover: `${ongoing}/pelagos-living.jpg`,
    shots: [
      { src: `${ongoing}/pelagos-exterior.jpg`, label: "Exterior" },
      { src: `${ongoing}/Pelagos_Exterior2.jpg`, label: "Amenities" },
      { src: `${ongoing}/pelagos-living.jpg`, label: "Living room" },
      { src: `${ongoing}/pelagos-bedroom.jpg`, label: "Bedroom" },
    ],
  },
  {
    name: "Azura",
    slug: "azura",
    status: "Ongoing",
    area: "Dubai",
    cover: `${ongoing}/azura-living.jpg`,
    shots: [
      { src: `${ongoing}/azura-exterior.jpg`, label: "Exterior" },
      { src: `${ongoing}/azura-reception.jpg`, label: "Reception" },
      { src: `${ongoing}/azura-living.jpg`, label: "Living room" },
      { src: `${ongoing}/azura-bedroom.jpg`, label: "Bedroom" },
    ],
  },
];

// What residents can ask about in the support form.
export const systems = [
  "Lighting & switches",
  "Climate & thermostats",
  "Doorbell & intercom",
  "Background music",
  "Alexa / voice control",
  "Sensors & alerts",
  "Something else",
];
