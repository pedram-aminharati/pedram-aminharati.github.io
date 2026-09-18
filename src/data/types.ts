export type Locale = 'en' | 'fr';

export interface Project {
  title: string;
  context: string;
  summary: string;
  tags: string[];
  /** Optional photo or video poster, path under /public. Shown when present. */
  image?: { src: string; alt: string };
  /** When set, the card links through to a case study at this path. */
  href?: string;
  /** Label for that link. Required whenever href is set. */
  hrefLabel?: string;
  /** Silent looping clip shown on the card. Requires href. */
  preview?: { src: string; label: string };
}

export interface Job {
  role: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  url: string;
  /** Shown as a small marker when the item is not a journal article. */
  kind?: string;
}

export interface Degree {
  degree: string;
  school: string;
  dates: string;
  note?: string;
}

/** One row of the results table. `budget` marks a run that never terminated. */
export interface ResultRow {
  variant: string;
  coverage: number;
  success: number;
  min: number | null;
  steps: number;
  ms: number | null;
  teacher?: boolean;
  budget?: boolean;
}

/** One panel of the six-way comparison video, in mosaic order. */
export interface VideoPanel {
  variant: string;
  coverage: number;
  steps: number;
  budget?: boolean;
}

export interface CaseStudy {
  lang: Locale;
  slug: string;
  meta: { title: string; description: string };
  back: { href: string; label: string };
  switchTo: { label: string; name: string; href: string };
  hero: {
    kicker: string;
    title: string;
    standfirst: string;
    paperLabel: string;
    paperHref: string;
    /** Set once the preprint is up; the link stays hidden until then. */
    arxivHref: string | null;
    arxivLabel: string;
  };
  stats: { value: string; label: string }[];
  video: {
    title: string;
    intro: string;
    src: string;
    caption: string;
    keyTitle: string;
    stepsLabel: string;
    panels: VideoPanel[];
    budgetNote: string;
  };
  sections: { id: string; title: string; paragraphs: string[] }[];
  table: {
    title: string;
    intro: string;
    caption: string;
    head: { variant: string; coverage: string; success: string; min: string; steps: string; ms: string };
    rows: ResultRow[];
  };
  coverageChart: { title: string; caption: string };
  daggerChart: {
    title: string;
    caption: string;
    roundLabel: string;
    series: { name: string; values: (number | null)[] }[];
  };
  figures: { id: string; src: string; alt: string; caption: string }[];
  /** Short clip of the scripted expert, shown inside the testbed section. */
  testbedClip: { src: string; caption: string };
  close: { title: string; text: string; cta: string };
  footer: string;
}

export interface SiteContent {
  lang: Locale;
  meta: { title: string; description: string };
  nav: {
    about: string;
    projects: string;
    experience: string;
    publications: string;
    contact: string;
    downloadCv: string;
    switchTo: { label: string; name: string; href: string };
  };
  hero: {
    role: string;
    degree: string;
    pitch: string;
    ctaContact: string;
    armCaption: string;
    armLabel: string;
    portraitAlt: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    facts: { value: string; label: string }[];
  };
  /** Full-bleed lecture photograph between About and Selected work. */
  teachingBand: { alt: string; caption: string; place: string };
  projects: { title: string; intro: string; items: Project[] };
  experience: { title: string; items: Job[] };
  publications: { title: string; readLabel: string; orcidLabel: string; orcidUrl: string; items: Publication[] };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  education: {
    title: string;
    items: Degree[];
    teachingTitle: string;
    teaching: string[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
    cvNote: string;
  };
  footer: string;
}
