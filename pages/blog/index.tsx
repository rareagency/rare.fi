import React from "react";
import SkaterBlock from "../../components/SkaterBlock";
import BlogPosts from "../../components/Stories/BlogPosts";
import FeaturedStory from "../../components/Stories/FeaturedStory";
import MoreStories from "../../components/Stories/MoreStories";
import Layout from "../../layouts/Page";
import staticPosts from "../../posts.json";
import { Post } from "../../types/Blog";
import { Article } from "../../types/Devto";
import { fetchArticles } from "../../utils/api";

interface Props {
  posts: Article[];
}

const Blog = ({ posts }: Props) => {
  const combinedPosts: (Article | Post)[] = [...posts, ...staticPosts];

  return (
    <Layout title="Stories - Rare Tampere">
      <FeaturedStory post={combinedPosts[0]} />
      <BlogPosts posts={combinedPosts.slice(1, 5)} />
      <SkaterBlock buttonUrl="/contact-us" buttonTxt="Dare to join Rare">
        Rare family welcomes people of any shape and form
      </SkaterBlock>
      <MoreStories posts={combinedPosts.slice(5)} />
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = await fetchArticles();

  return {
    props: {
      posts: articles.sort(
        (a, b) =>
          new Date(b.published_at).valueOf() -
          new Date(a.published_at).valueOf()
      ),
    },
  };
}

export default Blog;
