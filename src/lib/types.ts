import type { LucideIcon } from "lucide-react";

export type User = {
  name: string;
  avatarId: string;
};

export type Resource = {
  id: string;
  title: string;
  type: "Article" | "Video" | "Audio";
  category: string;
  content: string;
  imageId: string;
  duration?: string;
};

export type Counselor = {
  id: string;
  name: string;
  specialty: string;
  avatarId: string;
};

export type ForumPost = {
  id: string;
  title: string;
  author: User;
  createdAt: string;
  content: string;
  comments: ForumComment[];
  tags: string[];
  replies: number;
  views: number;
};

export type ForumComment = {
  id: string;
  author: User;
  createdAt: string;
  content: string;
};

export type NavItem = {
  href: string;
  title: string;
  icon: LucideIcon;
  label?: string;
};
