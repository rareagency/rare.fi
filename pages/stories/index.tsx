import React from "react";
import JoinUsSection from "../../components/JoinUsSection";
import BlogPosts from "../../components/Stories/BlogPosts";
import FeaturedStory from "../../components/Stories/FeaturedStory";
import MoreStories from "../../components/Stories/MoreStories";
import Layout from "../../layouts/Stories";

const Stories = () => {
  return (
    <Layout>
      <FeaturedStory />
      <BlogPosts />
      <JoinUsSection />
      <MoreStories />
    </Layout>
  );
};

export default Stories;
