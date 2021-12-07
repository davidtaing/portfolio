import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type Project = {};

const data: Array<Project> = [
  {
    category: "Website",
    title: "portfolio",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Styled Components",
      "Headless Wordpress",
      "SendGrid API",
    ],
    imageUrl: "/project-mockups/portfolio.png",
    bodyText: "You are here. My portfolio website to showcase my projects.",
  },
  {
    category: "Node App",
    title: "photo-sorter",
    skills: ["JavaScript", "Node"],
    imageUrl: "/project-mockups/photo-sorter.png",
    bodyText:
      "Loads exif metadata from image files and sorts them into folders by date. Used to sort over 17,000 photos accumulated from my real estate work.",
    previewType: "Demonstration",
    url: "https://youtu.be/cL8a5ofU_W4",
  },
  {
    category: "Node App",
    title: "email-sender",
    skills: ["TypeScript", "Node", "SendGrid API", "CSS"],
    imageUrl: "/project-mockups/email-sender.png",
    bodyText:
      "Loads data from a spreadsheet and batch sends emails with individual attachments using the SendGrid API.",
    previewType: "Demonstration",
    url: "https://youtu.be/G0a3LBJhtfY",
  },
];

const Projects = createContext<Array<Project> | undefined>(undefined);

const ProjectsContextProvider = ({ children }: any) => {
  const [projects, setProjects] = useState<Array<Project>>(data);

  return <Projects.Provider value={projects}>{children}</Projects.Provider>;
};

export const useProjectsContext = () => {
  const context = useContext(Projects);

  if (context === undefined) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsContextProvider"
    );
  }

  return context;
};

export default ProjectsContextProvider;
