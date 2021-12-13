interface Project {
  className?: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  imgSrc?: string;
  size: "medium" | "large";
  feature: boolean;
}

export default Project;
