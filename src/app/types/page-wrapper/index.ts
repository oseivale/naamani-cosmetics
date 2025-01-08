import { ReactNode } from "react";

export type PageBannerProps = {
  title: string; // Banner title (e.g., "About Us")
  backgroundImage: string;
  children: ReactNode; // Path to the background image
  customBGStyles?: { bgPosition?: string };
};
