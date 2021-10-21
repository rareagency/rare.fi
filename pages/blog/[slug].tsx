import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogHeader from "../../components/Blog/BlogHeader";
import SkaterBlock from "../../components/SkaterBlock";
import Layout from "../../layouts/Page";
import { Post } from "../../types/Post";
import { fetchArticles, fetchDevto } from "../../utils/api";
import { combineSlug, extractId } from "../../utils/slug";

interface ArticleProps {
  article: Post;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <Layout title={article.title}>
      <BlogHeader
        title={article.title}
        imgUrl={article.cover_image}
        imgAlt="cover image"
        category="Practical guide"
        readLength={article.reading_time_minutes}
      >
        The future is now! Get yourself a cool sticker T-Shirt without never
        leaving Telegram. I wanted to try out Telegram Bot AP&lsquo;s Payments
        feature so I built @StickerShirtsBot. It also comes with a frontend app
        stickershirts.com.
      </BlogHeader>

      <section className="layout-grid col-span-6 col-start-2 pb-32 px-8 mt-16">
        <BlogAuthorSection
          name={article.user.name}
          avatarUrl={article.user.profile_image}
          githubUrl={`https://github.com/${article.user.github_username}`}
          twitterUrl={`https://twitter.com/${article.user.twitter_username}`}
        />

        <div className="col-span-5 xl:col-all">
          {/* TODO: Integrate stuff from testpost.tsx */}
          <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
            {article.body_markdown}
          </Markdown>
        </div>
      </section>

      <SkaterBlock buttonUrl="/" buttonTxt="Check the bot out">
        Give the Telegram bot a try - and tell us what you think! :)
      </SkaterBlock>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Post[] = await fetchArticles();

  articles.forEach((article: Post) =>
    console.log("PATH: ", combineSlug(article.slug, article.id))
  );

  return {
    paths: articles.map((article: Post) => ({
      params: {
        slug: combineSlug(article.slug, article.id),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const id =
    params.slug instanceof Array
      ? extractId(params.slug[0])
      : extractId(params.slug);

  console.log("ID: ", id);
  const article = await fetchDevto(`/articles/${id}`);

  if (!article?.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article: article },
    revalidate: false,
  };
};

export default Article;
