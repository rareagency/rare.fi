import { Post } from "../types/Post";
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
  let articles: Post[] = [];

  for (const writer of writers.organizations) {
    const response: Post[] = await fetchDevto(
      `/articles?username=${writer.username}`
    );
    articles = articles.concat(response);
  }

  for (const writer of writers.users) {
    const response: Post[] = await fetchDevto(
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

  return articles;
}
