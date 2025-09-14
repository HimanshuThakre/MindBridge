import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PlaceHolderImages } from "./placeholder-images"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPlaceholderImage(id: string) {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or handle the error as needed
    return {
      imageUrl: "https://picsum.photos/seed/default/600/400",
      imageHint: "placeholder image"
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
}
