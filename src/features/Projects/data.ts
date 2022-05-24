import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Advice Generator",
    category: "Web App",
    skills: ["Next.js", "TypeScript", "React", "Public API"],
    description:
      "Simple Advice Generator App based on a Frontend Mentor Challenge.",
    bulletPoints: [
      "Built web application based on a Figma Design File and Style Guide provided by Frontend Mentor.",
      "Query public API for content using fetch.",
    ],
    githubUrl: "https://github.com/davidtaing/advice-generator",
    livePreviewUrl: "https://advice-generator-davidtaing.vercel.app/",
    thumbnailUrl: "/images/projects/advice-generator.png",
    thumbnailSize: "cover",
  },
  {
    title: "Rental Applications",
    category: "Web App",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "React Hook Form",
      "Jest",
      "React Testing Library",
    ],
    description: "Tenancy Applications Website.",
    bulletPoints: [
      "Pivoted form Formik to React Hook Form due to Formik re-rendering the entire form upon input.",
    ],
    githubUrl: "https://github.com/davidtaing/rental-applications",
    livePreviewUrl: "https://rental-applications.vercel.app/",
    thumbnailUrl: "/images/projects/rental-applications.png",
  },
  {
    title: "Domain Scraper",
    category: "Node App & R App",
    skills: ["Node", "JavaScript", "Mongoose", "R"],
    description: "How would you quickly price your rental property?",
    bulletPoints: [
      "Extracted rental prices from displayPrice field using by chaining String.replace(), String.trim() and String.split().",
    ],
    githubUrl: "https://github.com/davidtaing/domain-scraper",
    thumbnailUrl: "/images/projects/domain-scraper.png",
  },
];
