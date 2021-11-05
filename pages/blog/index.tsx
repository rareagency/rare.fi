import React from "react";
import staticBlog from "../../blog.json";
import SkaterBlock from "../../components/SkaterBlock";
import BlogPosts from "../../components/Stories/BlogPosts";
import FeaturedStory from "../../components/Stories/FeaturedStory";
import MoreStories from "../../components/Stories/MoreStories";
import Layout from "../../layouts/Page";
import { Post } from "../../types/Blog";
import { Article } from "../../types/Devto";
import { fetchArticles } from "../../utils/api";
import { chooseSlug, staticPlaceholder } from "../../utils/blog";

interface Props {
  posts: (Article | Post)[];
}

const Blog = ({ posts }: Props) => {
  const featuredPost = posts.find(
    (post) => chooseSlug(post) === staticBlog.featured_post_slug
  );
  const nonfeaturedPosts = posts.filter(
    (post) => chooseSlug(post) !== staticBlog.featured_post_slug
  );

  return (
    <Layout title="Stories - Rare Tampere">
      <FeaturedStory post={featuredPost || nonfeaturedPosts[0]} />
      <BlogPosts posts={nonfeaturedPosts.slice(featuredPost ? 0 : 1, 5)} />
      <SkaterBlock buttonUrl="/contact-us" buttonTxt="Dare to join Rare">
        Rare family welcomes people of any shape and form
      </SkaterBlock>
      <MoreStories posts={posts.slice(5)} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = await fetchArticles();
  const withPlaceholders = await Promise.all(
    [...articles, ...staticBlog.posts].map(async (article: Article | Post) => {
      // TODO: enable dynamic generation of placeholders
      // const { base64 } = await getPlaiceholder(article.cover_image);
      const base64 = staticPlaceholder;
      return { ...article, cover_image_placeholder: base64 };
    })
  );

  return {
    props: {
      posts: withPlaceholders.sort(
        (a, b) =>
          new Date(b.published_at).valueOf() -
          new Date(a.published_at).valueOf()
      ),
    },
  };
};

export default Blog;
