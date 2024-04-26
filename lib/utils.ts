import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {compareDesc, parseISO} from "date-fns"

export interface BlogCat {
  title: string;
  description: string;
  _id: string;
  tags: string;
  image: string; 
  publishedAt: string;
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function sortBlogs({blogs}: {blogs: BlogCat[]}) {
  return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}


