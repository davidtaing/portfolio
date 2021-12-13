import { createContext, useContext } from "react";

const projectData = [
  {
    feature: true,
    size: "large",
    category: "Website",
    title: "portfolio",
    description: "You are here. My portfolio website to showcase my projects.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Headless Wordpress",
      "SendGrid API",
    ],
  },
  {
    feature: true,
    size: "medium",
    category: "Node.js App",
    title: "photo-sorter",
    description:
      "Loads exif metadata from image files and sorts them into folders by date. Used to sort over 17,000 photos.",
    skills: ["JavaScript", "Node"],
  },
  {
    feature: false,
    size: "medium",
    category: "Node.js App",
    title: "email-sender",
    description:
      "Loads data from a spreadsheet and batch sends emails with individual attachments using the SendGrid API.",
    skills: ["TypeScript", "Node", "SendGrid API"],
  },
];

interface Props {
  children: React.ReactNode;
}

const ProjectContext = createContext(projectData);

const ProjectContextProvider = ({ children }: Props) => {
  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error(
      "useProjectContext must be used within a ProjectContextProvider"
    );
  }

  return context;
};

export default ProjectContextProvider;
