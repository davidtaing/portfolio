import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Advice Generator",
    slug: "advice-generator",
    description:
      "Simple Advice Generator App based on a Frontend Mentor Challenge.",
    imageUrl: "/images/projects/advice-generator.png",
    imageSize: "cover",
    backgroundColor: "#8FA6CB50",
  },
  {
    title: "Rental Applications",
    slug: "rental-applications",
    description:
      "Tenancy Applications Website built with Next.js, TypeScript and React Hook Form.",
    imageUrl: "/images/projects/rental-applications.png",
    backgroundColor: "#52FFA815",
  },
  {
    title: "Domain Scraper",
    slug: "domain-scraper",
    description:
      "Charting currently listed rental properties using the Domain.com.au API.",

    imageUrl: "/images/projects/domain-scraper.png",
    backgroundColor: "#8FA6CB50",
  },
  {
    title: "Email Sender",
    slug: "email-sender",
    description:
      "Batch send emails with individual attachments using the SendGrid API.",
    imageUrl: "/images/projects/email-sender.svg",
    backgroundColor: "#8FA6CB50",
  },
];
