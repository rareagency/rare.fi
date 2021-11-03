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
  const foundPosts: Post[] = posts.filter((post: Post) => post.slug === slug);
  return foundPosts[0];
};

/**
 * Extracts the AWS img source URL from Cloudinary's img proxy.
 * Returns the original URL if the extraction was unsuccessful,
 */
export const parseCloudinarySrcImg = (url: string) => {
  const srcRegex =
    /https?:\/\/res\.cloudinary\.com\/.+\/(https?:\/\/dev-to-uploads\.s3\.amazonaws\.com\/.+\/\w+\.\w{2,4})/i;

  const srcUrl = url.match(srcRegex);
  return srcUrl && srcUrl[1] ? srcUrl[1] : url;
};
