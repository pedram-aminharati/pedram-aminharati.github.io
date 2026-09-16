export type Locale = 'en' | 'fr';

export interface Project {
  title: string;
  context: string;
  summary: string;
  tags: string[];
  /** Optional photo or video poster, path under /public. Shown when present. */
  image?: { src: string; alt: string };
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
}

export interface Degree {
  degree: string;
  school: string;
  dates: string;
  note?: string;
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
  };
  about: {
    title: string;
    paragraphs: string[];
    facts: { value: string; label: string }[];
  };
  projects: { title: string; intro: string; items: Project[] };
  experience: { title: string; items: Job[] };
  publications: { title: string; readLabel: string; items: Publication[] };
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
