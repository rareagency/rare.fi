import { getPlaiceholder } from "plaiceholder";
import posts from "../posts.json";
import { Post } from "../types/Blog";
import { Article, RawArticle } from "../types/Devto";
import writers from "../writers.json";

function sleep(ms = 1000) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchDevto(path: string) {
  // Avoid hitting dev.to's ratelimits when on production.
  if (process.env.NODE_ENV === "production") {
    await sleep();
  }

  try {
    const resp = await fetch(`https://dev.to/api${path}`);
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function fetchArticles() {
  let articles: RawArticle[] = [];

  for (const writer of writers.organizations) {
    const response: RawArticle[] = await fetchDevto(
      `/articles?username=${writer.username}`
    );
    articles = articles.concat(response);
  }

  for (const writer of writers.users) {
    const response: RawArticle[] = await fetchDevto(
      `/articles?username=${writer.username}`
    );

    articles = articles.concat(
      response.filter((a) => {
        return !articles.find((article) => {
          return article.id === a.id;
        });
      })
    );
  }

  return Promise.all(articles.map((article) => validateArticle(article)));
}

export async function fetchArticle(id: string) {
  const article = await fetchDevto(`/articles/${id}`);
  return validateArticle(article);
}

async function validateArticle(article: RawArticle) {
  const cover_image = article.cover_image || "/static/cover-placeholder.png";
  const { base64 } = await getPlaiceholder(cover_image);
  return {
    ...article,
    cover_image,
    cover_image_placeholder: base64,
  } as Article;
}

export async function staticPosts() {
  return Promise.all(
    posts.map(async (post: Post) => {
      const { base64 } = await getPlaiceholder(post.cover_image);

      return {
        ...post,
        cover_image_placeholder: base64,
      } as Post;
    })
  );
}
