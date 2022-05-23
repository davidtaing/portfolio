export interface Project {
  title: string;
  category: string;
  skills: string[];
  description: string;
  bulletPoints: string[];
  githubUrl: string;
  livePreviewUrl?: string;
  thumbnailUrl: string;
  thumbnailSize?: "contain" | "cover" | "auto";
}
