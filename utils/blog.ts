import staticBlog from "../blog.json";
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
  const foundPosts: Post[] = staticBlog.posts.filter(
    (post) => post.slug === slug
  );

  return foundPosts[0];
};

// Generated with https://png-pixel.com/
export const staticPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcvBQAAdEBOulIO2MAAAAASUVORK5CYII=";
