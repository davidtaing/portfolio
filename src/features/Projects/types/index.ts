export interface Project {
  title: string;
  slug: string;
  category: string;
  skills: string[];
  description: string;
  bulletPoints: string[];
  githubUrl: string;
  livePreviewUrl?: string;
  imageUrl: string;
  imageSize?: "contain" | "cover" | "auto";
  backgroundColor: string;
}
