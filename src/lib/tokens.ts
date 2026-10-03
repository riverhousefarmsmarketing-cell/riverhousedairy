// ── Brand Guide v6 — RiverHouse Dairy ──
// Design tokens, navigation, and brand constants
// Naming Correction Rider applied: RiverHouse Dairy, Steward family

// ─── Colors ───
export const colors = {
  forest: "#2D4A2D",
  plum: "#6B2D5B",
  burgundy: "#722F37",
  cream: "#FAF7F2",
  white: "#FFFFFF",
} as const;

// ─── Brand ───
export const brand = {
  name: "RiverHouse Dairy",
  nameCaps: "RIVERHOUSE DAIRY",
  domain: "riverhousedairy.com",
  tagline: "Family Farm. Premium Dairy. Thoughtful Technology.",
  location: "Chehalis, WA",
  county: "Lewis County",
  farmBureau: "Lewis County Farm Bureau Board Member",
  guideVersion: "v6",
  hashtag: "#RiverHouseDraws",
} as const;

// ─── Product Registry ───
export const products = {
  goatSteward: {
    name: "GoatSteward",
    domain: "goatsteward.com",
    description: "Dairy goat herd management",
    status: "active" as const,
    route: "/tools/goatsteward",
  },
  cloverTrack: {
    name: "CloverTrack",
    domain: null,
    description: "4-H digital record book — always free",
    status: "active" as const,
    route: "/tools/clovertrack",
  },
  goodOfTheOrder: {
    name: "GoodOfTheOrder",
    domain: null,
    description: "Robert's Rules meeting management",
    status: "active" as const,
    route: "/tools/goodoftheorder",
  },
  sheepSteward: {
    name: "SheepSteward",
    domain: "sheepsteward.com",
    description: "Sheep flock management",
    status: "planned" as const,
    route: "/tools/sheepsteward",
  },
  farmSteward: {
    name: "FarmSteward",
    domain: "farmsteward.app",
    description: "Cross-species homestead health & nutrition",
    status: "demo" as const,
    route: "/tools/farmsteward",
  },
  dairySteward: {
    name: "DairySteward",
    domain: "dairysteward.com",
    description: "Professional multi-species dairy management",
    status: "planned" as const,
    route: "/tools/dairysteward",
  },
  milkSteward: {
    name: "MilkSteward",
    domain: "milksteward.com",
    description: "Post-parlor dairy processing & batch tracking",
    status: "concept" as const,
    route: "/tools/milksteward",
  },
} as const;

// ─── Navigation ───
export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Animals", href: "/animals" },
  { label: "About", href: "/about" },
  {
    label: "Goat Health",
    href: "/health",
    children: [
      { label: "Health Hub", href: "/health" },
      { label: "Conditions", href: "/health/conditions" },
      { label: "Medications", href: "/health/medications" },
      { label: "Myths Debunked", href: "/health/myths" },
      { label: "FAMACHA Guide", href: "/health/famacha" },
      { label: "Care Guides", href: "/health/guides" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export const secondaryNav: NavItem[] = [
  {
    label: "Farm Tools",
    href: "/tools",
    children: [
      { label: "GoatSteward", href: "/tools/goatsteward" },
      { label: "CloverTrack", href: "/tools/clovertrack" },
      { label: "GoodOfTheOrder", href: "/tools/goodoftheorder" },
    ],
  },
  { label: "Characters", href: "/characters" },
  {
    label: "Partners",
    href: "/partners",
    children: [
      { label: "Goatcare.com", href: "/partners/goatcare" },
      { label: "The Holistic Goat", href: "/partners/holistic-goat" },
      { label: "Lakeland Ranch", href: "/partners/lakeland-ranch" },
      { label: "Landrace LGD", href: "/partners/landrace-lgd" },
    ],
  },
  { label: "Ask Me About", href: "/ask-me-about" },
];

// ─── Stats Bar data ───
export const stats = [
  { value: "80+", label: "Animals" },
  { value: "8", label: "Breeds" },
  { value: "1,157", label: "Miles" },
  { value: "FB", label: "Board" },
] as const;

// ─── Ask Me About Topics ───
export const askMeAboutTopics = [
  { slug: "leveraged-seed-buy", title: "Leveraged Seed Buy Through Farm Bureau", farmBureau: true },
  { slug: "farmers-networking-series", title: "Farmers Networking Series", farmBureau: true },
  { slug: "lacaune-genetics", title: "Building Lacaune Genetics in the PNW", farmBureau: false },
  { slug: "famacha-scoring", title: "FAMACHA Scoring for Parasite Management", farmBureau: false },
  { slug: "4h-livestock", title: "4-H Livestock Projects for Youth", farmBureau: true },
  { slug: "farm-bureau-benefits", title: "Farm Bureau Member Benefits", farmBureau: true },
  { slug: "starting-micro-dairy", title: "Starting a Micro Dairy", farmBureau: false },
  { slug: "livestock-guardian-dogs", title: "Livestock Guardian Dogs", farmBureau: false },
  { slug: "goatsteward-track-herd", title: "GoatSteward: Track Your Herd", farmBureau: false },
] as const;

// ─── Affiliate Partners ───
export const partners = [
  { slug: "goatcare", name: "Goatcare.com", route: "/partners/goatcare" },
  { slug: "holistic-goat", name: "The Holistic Goat", route: "/partners/holistic-goat" },
  { slug: "lakeland-ranch", name: "Lakeland Ranch Equipment", route: "/partners/lakeland-ranch" },
  { slug: "landrace-lgd", name: "Landrace LGD Dog Rescue", route: "/partners/landrace-lgd" },
] as const;

// ─── Coloring Book Characters ───
export const characters = [
  { name: "Clover", breed: "Nigerian Dwarf doe", personality: "The mascot. Always first on the milk stand." },
  { name: "Maple", breed: "LaMancha doe", personality: "Gentle giant. Earless and proud." },
  { name: "Biscuit", breed: "Mini-LaMancha", personality: "Perpetually hungry. Always underfoot." },
  { name: "Fern", breed: "Icelandic ewe", personality: "The flock leader." },
  { name: "Marguerite", breed: "Lacaune-cross ewe", personality: "The rare genetics star. Traveled 1,157 miles." },
  { name: "Pepper", breed: "Livestock Guardian Dog", personality: "On duty 24/7." },
  { name: "Hazel", breed: "Jersey cow", personality: "Heritage dairy. A2/A2 genetics." },
  { name: "Thistle", breed: "Oberhasli doe", personality: "The independent one." },
] as const;
