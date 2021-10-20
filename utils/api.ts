import { Post } from "../types/Post";
import writers from "../writers.json";

export async function fetchDevto(path: string) {
  const resp = await fetch(`https://dev.to/api${path}`);
  const data = await resp.json();
  return data;
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
