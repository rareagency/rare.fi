/* eslint-disable react/display-name */
import emoji from "emoji-dictionary";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogCode from "../../components/Blog/BlogCode";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogImage from "../../components/Blog/BlogImage";
import BlogList from "../../components/Blog/BlogList";
import BlogParagraph from "../../components/Blog/BlogParagraph";
import Layout from "../../layouts/Page";
import { Article } from "../../types/dev-to";
import { fetchArticle, fetchArticles } from "../../utils/api";
import { combineSlug, extractId } from "../../utils/blog";

function cleanUpMarkdown(markdown: string) {
  return markdown.replace(/{%.+%}/g, ""); // Remove Liquid tags
}
function emojiSupport(text: string) {
  return text.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));
}

interface Props {
  article: Article;
}

const Post = ({ article }: Props) => {
  return (
    <Layout title={article.title}>
      <BlogHeader
        title={article.title}
        image={article.cover_image}
        imageAlt="cover image"
        imagePlaceholder={article.cover_image_placeholder}
        tags={article.tags}
        publishedAtReadable={article.readable_publish_date}
        publishedAt={article.published_at}
        readLength={article.reading_time_minutes}
      />

      <section className="layout-grid col-span-6 col-start-2 sm:px-0 pb-16 px-8 mt-16 md:px-0">
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
                  style={{ overflowWrap: "anywhere" }}
                >
                  {children}
                </a>
              ),
              h1: ({ children }) => (
                <h2 className="sm:text-[22px] text-[30px]">{children}</h2>
              ),
              h2: ({ children }) => (
                <h3 className="sm:text-[20px] mt-12">{children}</h3>
              ),
              h3: ({ children }) => (
                <h3 className="sm:text-[18px] text-[24px] mt-6">{children}</h3>
              ),
              h4: ({ children }) => <h4 className="mt-6">{children}</h4>,
              p: BlogParagraph,
              ul: BlogList,
              ol: ({ children }) => <BlogList ordered>{children}</BlogList>,
              hr: () => <hr className="my-6" />,
              code: ({ inline, className, children }) => (
                <BlogCode className={className} inline={inline}>
                  {children}
                </BlogCode>
              ),
              img: ({ ...props }) => <BlogImage {...props} />,
              pre: React.Fragment,
            }}
            rehypePlugins={[rehypeRaw, remarkGfm]}
          >
            {cleanUpMarkdown(emojiSupport(article.body_markdown))}
          </Markdown>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Article[] = await fetchArticles();

  return {
    paths: articles.map((article) => ({
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

  if (!id) {
    return {
      notFound: true,
    };
  }

  const article = await fetchArticle(id);

  if (!article?.slug) {
    return {
      notFound: true,
    };
  }

  const { base64 } = await getPlaiceholder(article.cover_image);

  return {
    props: { article: { ...article, cover_image_placeholder: base64 } },
    revalidate: false,
  };
};

export default Post;
