import React from "react";
import SkaterBlock from "../../components/SkaterBlock";
import BlogPosts from "../../components/Stories/BlogPosts";
import FeaturedStory from "../../components/Stories/FeaturedStory";
import MoreStories from "../../components/Stories/MoreStories";
import Layout from "../../layouts/Page";
import { Post } from "../../types/Post";

export async function getStaticProps() {
  const writers = [
    { name: "Riku Rouvila", username: "rikurouvila" },
    { name: "Hannes Aaltonen", username: "haalto" },
    { name: "Kalle Hirvola", username: "eioo" },
    { name: "Cihan Bebek", username: "keksike" },
  ];

  const res = await fetch("https://dev.to/api/articles?username=rare");
  let posts: Post[] = await res.json();

  for (const writer of writers) {
    const res = await fetch(
      `https://dev.to/api/articles?username=${writer.username}`
    );
    let newPosts: Post[] = await res.json();
    newPosts = newPosts.filter((p) => {
      return !posts.find((post) => {
        return post.id === p.id;
      });
    });
    posts = posts.concat(newPosts);
  }

  return {
    props: {
      posts: posts.sort(
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
      <SkaterBlock buttonUrl="/contact-us" buttonTxt="Dare to join Rare">
        Rare family welcomes people of any shape and form
      </SkaterBlock>
      <MoreStories posts={props.posts.slice(5)} />
    </Layout>
  );
};

export default Stories;
