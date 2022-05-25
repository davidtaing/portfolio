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
    imageUrl: "/images/projects/advice-generator.png",
    imageSize: "cover",
    backgroundColor: "#8FA6CB50",
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
    description:
      "Tenancy Applications Website built with Next.js, TypeScript and React Hook Form.",
    bulletPoints: [
      "Pivoted form Formik to React Hook Form due to Formik re-rendering the entire form upon input.",
    ],
    githubUrl: "https://github.com/davidtaing/rental-applications",
    livePreviewUrl: "https://rental-applications.vercel.app/",
    imageUrl: "/images/projects/rental-applications.png",
    backgroundColor: "#52FFA815",
  },
  {
    title: "Domain.com.au Scraper",
    category: "Node App & R App",
    skills: ["Node", "JavaScript", "Mongoose", "R", "Domain.com.au API"],
    description:
      "How would you quickly price your rental property? By charting currently listed rental properties.",
    bulletPoints: [
      "Extracted rental prices from displayPrice field using by chaining String.replace(), String.trim() and String.split().",
    ],
    githubUrl: "https://github.com/davidtaing/domain-scraper",
    imageUrl: "/images/projects/domain-scraper.png",
    backgroundColor: "#8FA6CB50",
  },
  {
    title: "Email Sender",
    category: "Node App",
    skills: ["Node", "JavaScript", "SendGrid API"],
    description:
      "Batch send emails using the SendGrid API and saved four hours each month.",
    bulletPoints: [],
    githubUrl: "https://github.com/davidtaing/email-sender",
    imageUrl: "/images/projects/email-sender.svg",
    backgroundColor: "#8FA6CB50",
  },
];
