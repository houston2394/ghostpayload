// ---------------------------------------------------------------------------
// Edit this file to change your name, taglines, links, and featured projects.
// Everything the site shows about "you" lives here.
// ---------------------------------------------------------------------------

export const site = {
  name: 'ghostpayload',
  handle: 'houston2394',
  author: 'Houston',
  // Shown in the browser tab / SEO. Keep it short.
  title: 'ghostpayload',
  tagline: 'OSINT · red teaming · AI agents',
  // The one- or two-line pitch on the landing page.
  intro:
    'I build tools at the edge of offensive security and machine intelligence — passive reconnaissance engines, threat-intercept platforms, and autonomous agents that turn scattered signals into a picture.',
  url: 'https://ghostpayload.tech',
  email: 'ghostfromda3@gmail.com',
  links: {
    github: 'https://github.com/houston2394',
  },
} as const;

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  status?: 'active' | 'building' | 'archived';
  featured?: boolean;
};

// Curated — add, remove, or reorder freely. `featured: true` surfaces it on the
// landing page; the full list renders on /projects.
export const projects: Project[] = [
  {
    name: 'ShadowBroker',
    blurb:
      'Open-source intelligence for the global theater — track private jets, spy satellites, and seismic events in one interface, then let an AI agent surface correlations nobody aggregated before.',
    tags: ['OSINT', 'Python', 'AI agents'],
    href: 'https://github.com/houston2394/Shadowbroker',
    status: 'building',
    featured: true,
  },
  {
    name: 'PHANTOM Intelligence Suite',
    blurb:
      'Passive OSINT time-machine recon and macro-sentiment signals. A 2,661-line recon engine doing CT time travel, generative subdomain prediction, infrastructure DNA, and drift detection — wrapped in a full-stack SaaS.',
    tags: ['Recon', 'TypeScript', 'SaaS'],
    status: 'active',
    featured: true,
  },
  {
    name: 'security-prompt-os',
    blurb:
      '200+ AI prompts for pentesters and bug hunters — reconnaissance, exploitation, code review, red team, and CTF workflows, organized as a reusable operating system.',
    tags: ['Red team', 'Prompts', 'Tooling'],
    href: 'https://github.com/houston2394/security-prompt-os',
    status: 'active',
    featured: true,
  },
  {
    name: 'Super Red Team Bot',
    blurb:
      'Extensible red-team automation toolkit with a plugin system, endpoint scanning, and parameter fuzzing.',
    tags: ['Red team', 'Python', 'Automation'],
    href: 'https://github.com/houston2394/Super_red_team_bot',
    status: 'active',
  },
  {
    name: 'Bug Bounty Companion',
    blurb:
      'Track targets, submissions, and payouts across engagements — a hunter’s cockpit for staying organized under pressure.',
    tags: ['Bug bounty', 'JavaScript', 'App'],
    href: 'https://github.com/houston2394/bug-bounty-app',
    status: 'active',
  },
  {
    name: 'openclaw',
    blurb:
      'Your own personal AI assistant — any OS, any platform. The lobster way. 🦞',
    tags: ['AI agents', 'TypeScript', 'OSS'],
    href: 'https://github.com/houston2394/openclaw',
    status: 'active',
  },
];
