export interface Project {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageSize?: "contain" | "cover" | "auto";
  backgroundColor: string;
}
