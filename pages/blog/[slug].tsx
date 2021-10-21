/* eslint-disable react/display-name */
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Markdown from "react-markdown";
import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogCode from "../../components/Blog/BlogCode";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogList from "../../components/Blog/BlogList";
import BlogParagraph from "../../components/Blog/BlogParagraph";
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
        tags={article.tags}
        publishedAt={article.readable_publish_date}
        readLength={article.reading_time_minutes}
      />

      <section className="layout-grid col-span-6 col-start-2 sm:px-0 pb-32 px-8 mt-16">
        <BlogAuthorSection
          name={article.user.name}
          avatarUrl={article.user.profile_image}
          githubUrl={`https://github.com/${article.user.github_username}`}
          twitterUrl={`https://twitter.com/${article.user.twitter_username}`}
        />

        <div className="col-span-5 xl:col-all">
          <Markdown
            components={{
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-[#34517E] border-b-2 border-gray-500 hover:text-dark-blue"
                >
                  {children}
                </a>
              ),
              h2: ({ children }) => (
                <h3 className="sm:text-[20px]">{children}</h3>
              ),
              p: BlogParagraph,
              ul: BlogList,
              ol: ({ children }) => <BlogList ordered>{children}</BlogList>,

              code: ({ inline, className, children }) => (
                <BlogCode className={className} inline={inline}>
                  {children}
                </BlogCode>
              ),
            }}
          >
            {article.body_markdown}
          </Markdown>
        </div>
      </section>
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
