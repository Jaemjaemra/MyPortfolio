export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  website: string | null;
  demo: string | null;
  trailer: string | null;
  image_url: string | null;
  created_at: string;
};

export type ProjectCategory =
  | "Web Development"
  | "Game Development"
  | "Other";
