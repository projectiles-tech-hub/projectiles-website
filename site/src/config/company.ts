// Company details, contacts and business lines, kept in one place.
// Change a detail here and it changes on every page.

export const company = {
  name: 'Projectiles Tech Hub Limited',
  shortName: 'Projectiles',
  rc: 'RC 7987623',
  description:
    'Projectiles Tech Hub Limited is a project management, construction, IT and real estate company, registered in Nigeria and headquartered in Benin City, Edo State.',
  line: 'Project management, construction and real estate, backed by our own supply chain. Benin City, Edo State.',
  url: 'https://projectilestechhublimited.com',
  address: {
    street: '39 Ohonre Street',
    area: 'Ugbowo',
    city: 'Benin City',
    state: 'Edo State',
    country: 'Nigeria',
    countryCode: 'NG',
  },
  phone: '+234\u00a0810\u00a0792\u00a07331',
  phoneHref: 'tel:+2348107927331',
  whatsappHref: 'https://wa.me/2348107927331',
  email: 'projectilestechhub@gmail.com',
  // Opening hours are optional. Leave empty to hide them.
  openingHours: '',
  managingDirector: {
    name: 'Emmanuel Chukwuka Oraegbu',
    title: 'Managing Director',
    // Placeholder until the profile is supplied.
    profile: 'Emmanuel leads Projectiles Tech Hub Limited and all of its business lines. His full profile will be added here.',
  },
  youtube: {
    handle: '@primrosehillestates',
    url: 'https://www.youtube.com/@primrosehillestates',
    subscribeUrl: 'https://www.youtube.com/@primrosehillestates?sub_confirmation=1',
    channelId: 'UCm8Br7LcPyQemUzNJFWGS-A',
  },
  // Social links: add the address to show the icon in the footer. Empty ones are hidden.
  social: {
    youtube: 'https://www.youtube.com/@primrosehillestates',
    facebook: '',
    instagram: '',
    x: '',
    linkedin: '',
    tiktok: '',
  } as Record<string, string>,
  // Cloudflare Turnstile site key (public). Empty hides the spam check until it is set up.
  turnstileSiteKey: '',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=39+Ohonre+Street%2C+Ugbowo%2C+Benin+City%2C+Edo+State',
};

export const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.state}`;

export const nav = [
  { label: 'What we do', href: '/what-we-do/' },
  { label: 'Estate projects', href: '/estates/' },
  { label: 'Invest', href: '/invest/' },
  { label: 'Videos', href: '/videos/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About us', href: '/about/' },
];

export type BusinessLine = {
  slug: string;
  name: string;
  icon: string;
  group: 'core' | 'estates' | 'supply';
  line: string;
  intro: string;
  services: [string, string][];
  audience: string[];
  steps: [string, string][];
  video?: string;
};

// Core services first, then our own estates, then the supply businesses.
export const businessLines: BusinessLine[] = [
  {
    slug: 'project-management',
    name: 'Project management',
    icon: 'project-management',
    group: 'core',
    line: 'Scheduling, budgeting, procurement and quality control, from first plan to handover.',
    intro:
      'We plan, manage and deliver construction projects for private and public clients, with professional control of schedule, budget, procurement and quality.',
    services: [
      ['Planning and scheduling', 'A clear programme with milestones, so everyone knows what happens next and when.'],
      ['Cost planning and budget control', 'Detailed costing at the start and spending tracked against the budget throughout.'],
      ['Procurement', 'Materials, contractors and suppliers chosen for value and quality, backed by our own supply businesses.'],
      ['Quality control and supervision', 'Work inspected at every stage on site, so problems are fixed early.'],
      ['Contract administration', 'Contracts, variations and payments managed fairly and on record.'],
      ['Progress reporting', 'Regular reports on time, cost and quality, so you always know where your project stands.'],
    ],
    audience: [
      'Private clients building homes, offices or shops',
      'Businesses and developers with commercial projects',
      'Government and public bodies',
      'Investors who want their project managed for them',
    ],
    steps: [
      ['Tell us about your project', 'Chat on WhatsApp, call or send the form. We listen to what you need.'],
      ['Plan and budget', 'We visit the site and prepare a schedule and a detailed budget for you to agree.'],
      ['Build and manage', 'We manage procurement, contractors and quality, and report progress to you.'],
      ['Hand over', 'We check the finished work with you and hand it over, on time and on budget.'],
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: 'construction',
    group: 'core',
    line: 'Building projects for private and public clients, delivered to plan, budget and standard.',
    intro:
      'We build homes, offices, commercial buildings and estate roads for private and public clients, using materials from our own supply businesses.',
    services: [
      ['Homes and residential buildings', 'Houses, duplexes and apartment blocks, from foundations to finishing.'],
      ['Offices and commercial buildings', 'Shops, offices and mixed-use buildings built to plan and to standard.'],
      ['Estate infrastructure', 'Roads, drainage and site works for estates and private developments.'],
      ['Renovation and extension', 'Upgrades, extensions and completion of unfinished buildings.'],
      ['Public projects', 'Buildings and works for public clients, delivered with full documentation.'],
      ['Site supervision', 'Experienced site teams who keep work safe, tidy and on schedule.'],
    ],
    audience: [
      'Families building their own home',
      'Businesses that need offices, shops or warehouses',
      'Developers building estates or apartments',
      'Government and public bodies',
    ],
    steps: [
      ['Share your plans', 'Send your drawings or ideas, or ask us to help you prepare them.'],
      ['Get a clear quote', 'We price the work in detail and agree a schedule with you.'],
      ['We build', 'Our team builds with our own materials and keeps you updated.'],
      ['Move in', 'We inspect the finished work with you and hand over the keys.'],
    ],
  },
  {
    slug: 'real-estate-development',
    name: 'Real estate development',
    icon: 'real-estate-development',
    group: 'estates',
    line: 'Our own Primrose Hill Estates, plus property management, valuation, title, geo-services and brokerage for clients.',
    intro:
      'We develop our own estate projects, including the Primrose Hill Estates range, and offer property services to clients on secure legal footing.',
    services: [
      ['Property development', 'Planned estates and buildings, from land acquisition to finished plots and homes.'],
      ['Property management', 'Care of buildings and estates after handover, to protect their value.'],
      ['Property valuation', 'Professional valuations of land and buildings for owners, buyers and investors.'],
      ['Land administration and title perfection', 'Survey, documentation and title processes handled properly from the start.'],
      ['Geo-services', 'Site surveys and mapping, so plans and prices rest on accurate information.'],
      ['Agency and property brokerage', 'Help to buy, sell or let land and property.'],
    ],
    audience: [
      'People buying plots or homes, in Nigeria or abroad',
      'Landowners who need valuation, title or survey work',
      'Owners who want their property managed',
      'Investors looking for documented, valued assets',
    ],
    steps: [
      ['Tell us what you need', 'A plot, a valuation, title work or management: start with a message.'],
      ['We look at the land or property', 'We visit, survey and check the documents.'],
      ['We agree the work', 'You get a clear scope, price and timeline.'],
      ['We deliver', 'We complete the work and hand over the documents or results.'],
    ],
  },
  {
    slug: 'cement-distribution',
    name: 'Cement distribution',
    icon: 'cement-distribution',
    group: 'supply',
    line: 'A steady supply of cement for our sites and for builders and dealers.',
    intro: 'We distribute cement in bulk to our own sites and to builders, dealers and contractors across Edo State.',
    services: [
      ['Bulk cement supply', 'Cement in bulk for sites, dealers and contractors.'],
      ['Site delivery', 'Delivered to your site by our own trucks.'],
      ['Steady stock', 'Planned stock so your project keeps working when cement is scarce.'],
      ['Supply for projects', 'Scheduled deliveries matched to your building programme.'],
    ],
    audience: ['Builders and contractors', 'Building materials dealers', 'Developers and estate projects', 'Private clients building a home'],
    steps: [
      ['Tell us what you need', 'Quantity, brand and delivery location.'],
      ['Get a price', 'We confirm the price and delivery date.'],
      ['We deliver', 'Our trucks bring the cement to your site.'],
      ['Order again', 'Set up regular deliveries for the life of your project.'],
    ],
  },
  {
    slug: 'block-moulding',
    name: 'Block moulding',
    icon: 'block-moulding',
    group: 'supply',
    line: 'Blocks made and quality checked in our own yard.',
    intro: 'We mould and cure sandcrete blocks in our own yard, for our projects and for builders across Benin City.',
    services: [
      ['Sandcrete blocks', 'Hollow and solid blocks in standard sizes.'],
      ['Quality checks', 'Blocks cured properly and checked before they leave the yard.'],
      ['Bulk orders', 'Large quantities for estates and big projects.'],
      ['Delivery', 'Blocks delivered to your site by our own trucks.'],
    ],
    audience: ['Builders and contractors', 'Families building a home', 'Developers and estate projects', 'Building materials dealers'],
    steps: [
      ['Tell us what you need', 'Block type, size and quantity.'],
      ['Get a price', 'We confirm the price and when the blocks will be ready.'],
      ['We mould and cure', 'Your blocks are made and cured in our yard.'],
      ['We deliver', 'Our trucks bring them to your site.'],
    ],
  },
  {
    slug: 'sand-dredging',
    name: 'Sand dredging',
    icon: 'sand-dredging',
    group: 'supply',
    line: 'River sand for building and filling, dredged and supplied by us.',
    intro: 'We dredge and supply clean river sand for building, block making and land filling.',
    services: [
      ['Sharp sand for building', 'Clean river sand for concrete, plastering and block making.'],
      ['Filling sand', 'Sand for land filling and site preparation.'],
      ['Bulk supply', 'Large quantities for estates and big projects.'],
      ['Delivery', 'Delivered to your site by our own trucks.'],
    ],
    audience: ['Builders and contractors', 'Block makers', 'Developers preparing land', 'Private clients building a home'],
    steps: [
      ['Tell us what you need', 'Type of sand, quantity and location.'],
      ['Get a price', 'We confirm the price and delivery date.'],
      ['We dredge and load', 'Sand is dredged and loaded for you.'],
      ['We deliver', 'Our trucks bring it to your site.'],
    ],
  },
  {
    slug: 'logistics-and-haulage',
    name: 'Logistics and haulage',
    icon: 'logistics-and-haulage',
    group: 'supply',
    line: 'Our own trucks move materials to site on time.',
    intro: 'Our trucks move building materials and goods for our projects and for clients, on time and with care.',
    services: [
      ['Building materials haulage', 'Cement, blocks, sand and other materials moved to site.'],
      ['Scheduled deliveries', 'Regular runs planned around your project.'],
      ['Haulage for clients', 'Trucks available for other businesses and projects.'],
      ['Careful handling', 'Experienced drivers and loaders who look after your goods.'],
    ],
    audience: ['Builders and contractors', 'Materials dealers', 'Businesses moving goods', 'Developers and estate projects'],
    steps: [
      ['Tell us what to move', 'What, how much, from where and to where.'],
      ['Get a price', 'We confirm the price and the date.'],
      ['We load and move', 'Our team loads and drives.'],
      ['Delivered', 'Your goods arrive on time.'],
    ],
  },
];

export const lineBySlug = (slug: string) => businessLines.find((l) => l.slug === slug);

export const expertise = [
  'Construction and property development',
  'Property management',
  'Property valuation',
  'Land administration and title perfection',
  'Geo-services',
  'Agency and property brokerage',
];

// The nine reasons on the home page (approved 28 October 2026).
export const reasons: [string, string, string][] = [
  ['Track record', 'Finished projects that speak for us. What we have built is the best measure of what we will build for you.', 'Finished projects that speak for us.'],
  ['On time and on budget', 'Every project has a clear schedule and an agreed budget from day one. We work efficiently and cost-effectively to finish on the date and at the price we agreed.', 'A clear schedule and an agreed budget from day one, kept to the end.'],
  ['Quality and reliability', 'Work is checked at every stage and materials meet the standard, so what we build lasts and what we promise happens.', 'Checked at every stage, built to last.'],
  ['Safety', 'Safe sites are productive sites. Fewer accidents mean fewer delays, lower costs and better work.', 'Safe sites mean fewer delays and lower costs.'],
  ['Expertise', 'Project managers, engineers and property professionals who know how to plan, cost and build properly the first time.', 'Professionals who plan, cost and build right the first time.'],
  ['Start to finish', 'One firm from design to handover, so nothing falls between contractors and one team is accountable for the result.', 'One firm from design to handover, one team accountable.'],
  ['Market knowledge', 'We know Nigerian construction, materials and approvals, so we price accurately and avoid costly surprises.', 'Accurate prices and no costly surprises.'],
  ['Trusted by our clients', 'Private and public clients return to us and recommend us, because we deliver what we agree.', 'Clients return to us and recommend us.'],
  ['Responsibility', 'We respect the communities and the environment around our sites, which keeps projects running smoothly and on schedule.', 'Good neighbours to communities and the environment.'],
];
