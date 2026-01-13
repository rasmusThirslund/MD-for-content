import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const contentDir = path.join(process.cwd(), "content");

export function getContent<T>(filePath: string): T {
  const fullPath = path.join(contentDir, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return yaml.load(fileContents) as T;
}

// Type definitions for content
export interface HeroContent {
  heading: {
    highlight: string;
    main: string;
  };
  description: string;
  image: {
    src: string;
    alt: string;
  };
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface HomePageContent {
  hero: HeroContent;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  navigation: Array<{ label: string; href: string }>;
}

// Convenience functions
export function getHomeContent(): HomePageContent {
  return getContent<HomePageContent>("pages/home.yaml");
}

export function getSiteContent(): SiteContent {
  return getContent<SiteContent>("site.yaml");
}

// Markdown content loader
export function getMarkdownContent(filePath: string): string {
  const fullPath = path.join(contentDir, filePath);
  return fs.readFileSync(fullPath, "utf8");
}

