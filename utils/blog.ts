import posts from "../posts.json";
import { Post } from "../types/Blog";
import { Article } from "../types/Devto";

/**
 * Combines article's slug and id while removing the redundant identifier from the slug.
 */
export const combineSlug = (slug: string, id: string | number) => {
  return `${slug.replace(/-\w+$/i, "")}-${id}`;
};

/**
 * Extracts article ID from the custom slug.
 */
export const extractId = (slug: string) => {
  const id = slug.match(/-(\d+)$/);
  if (!id || !id[1]) {
    return null;
  }

  return id[1];
};

export const chooseSlug = (blogPost: Post | Article) => {
  if ("id" in blogPost) {
    return combineSlug(blogPost.slug, blogPost.id);
  }

  return blogPost.slug;
};

export const getStaticMetaData = (slug: string) => {
  const foundPosts: Post[] = posts.filter((post) => post.slug === slug);
  return foundPosts[0];
};

/**
 * Returns if more than n days has passed since given time
 */
export const daysPassed = (time: string, days: number) => {
  const daysAgo = new Date(time).valueOf() + days * 24 * 60 * 60 * 1000;
  return Date.now() > daysAgo;
};

// Generated with https://png-pixel.com/
export const staticPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcvBQAAdEBOulIO2MAAAAASUVORK5CYII=";
