import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Markdown from "react-markdown";
import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogBulletList from "../../components/Blog/BlogBulletList";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogParagraph from "../../components/Blog/BlogParagraph";
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
        imgUrl={article.cover_image || "/static/featured-article.png"}
        imgAlt="cover image"
        category="Practical guide"
        readLength={article.reading_time_minutes}
      >
        {article.description}
      </BlogHeader>

      <section className="layout-grid col-span-6 col-start-2 pb-32 px-8 mt-16">
        <BlogAuthorSection
          name={article.user.name}
          avatarUrl={article.user.profile_image}
          githubUrl={`https://github.com/${article.user.github_username}`}
          twitterUrl={`https://twitter.com/${article.user.twitter_username}`}
        />

        <div className="col-span-5 xl:col-all">
          <Markdown
            components={{
              p: BlogParagraph,
              ul: BlogBulletList,
            }}
          >
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
