import React from "react";
import SkaterBlock from "../../components/SkaterBlock";
import BlogPosts from "../../components/Stories/BlogPosts";
import FeaturedStory from "../../components/Stories/FeaturedStory";
import MoreStories from "../../components/Stories/MoreStories";
import Layout from "../../layouts/Page";
import { Post } from "../../types/Post";
import { fetchArticles } from "../../utils/api";

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

interface Props {
  posts: Post[];
}
const Stories = (props: Props) => {
  return (
    <Layout title="Stories - Rare Tampere">
      <FeaturedStory post={props.posts[0]} />
      <BlogPosts posts={props.posts.slice(1, 5)} />
      <SkaterBlock buttonUrl="/" buttonTxt="Dare to join Rare">
        Rare family welcomes people of any shape and form
      </SkaterBlock>
      <MoreStories posts={props.posts.slice(5)} />
    </Layout>
  );
};

export default Stories;
