import React from "react";
import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogImageRow from "../../components/Blog/BlogImageRow";
import BlogList from "../../components/Blog/BlogList";
import BlogNumberedTitle from "../../components/Blog/BlogNumberedTitle";
import BlogParagraph from "../../components/Blog/BlogParagraph";
import BlogQuote from "../../components/Blog/BlogQuote";
import SkaterBlock from "../../components/SkaterBlock";
import Layout from "../../layouts/Page";
import headerImg from "../../public/static/blog/founding-story/header.jpg";

const BlogDetail = () => {
  return (
    <Layout title="Test blog post">
      <BlogHeader
        title="What I learned from"
        image={headerImg}
        imageAlt="placeholder"
        tags={["github", "azure"]}
        publishedAtReadable="Jan 1"
        publishedAt="2021-01-01T12:00:00Z"
        readLength={2}
      />

      <section className="layout-grid col-span-6 col-start-2 pb-32 px-8 mt-16 md:px-0">
        <BlogAuthorSection
          name="Teppo Testaaja"
          avatarUrl="https://via.placeholder.com/128.jpg"
          githubUrl="https://github.com/joelbman"
          twitterUrl="https://twitter.com/ElonMusk"
        />

        <div className="col-span-5 xl:col-all">
          <BlogParagraph>
            The future is now! Get yourself a cool sticker T-Shirt without never
            leaving Telegram. I wanted to try out Telegram Bot AP&lsquo;s
            Payments feature so I built @StickerShirtsBot. It also comes with a
            frontend app stickershirts.com.
          </BlogParagraph>

          <BlogParagraph title="Test title">
            The future is now! Get yourself a cool sticker T-Shirt without never
            leaving Telegram. I wanted to try out Telegram Bot AP&lsquo;s
            Payments feature so I built @StickerShirtsBot. It also comes with a
            frontend app stickershirts.com.
          </BlogParagraph>

          <BlogParagraph title="Smaller title" titleSize="sm">
            The future is now! Get yourself a cool sticker T-Shirt without never
            leaving Telegram. I wanted to try out Telegram Bot AP&lsquo;s
            Payments feature so I built @StickerShirtsBot. It also comes with a
            frontend app stickershirts.com.
          </BlogParagraph>

          <div className="mb-24">
            <span className="h5 mb-8">Numbers</span>

            <BlogNumberedTitle num={1}>
              There might also be text with...
            </BlogNumberedTitle>
            <BlogNumberedTitle num={2}>
              There might also be text with...
            </BlogNumberedTitle>
            <BlogNumberedTitle num={3}>
              There might also be text with...
            </BlogNumberedTitle>

            <div className="ml-12 mt-8">
              <BlogNumberedTitle num={1} sm>
                Smaller subtitles
              </BlogNumberedTitle>
              <BlogNumberedTitle num={2} sm>
                Smaller subtitles
              </BlogNumberedTitle>
              <BlogNumberedTitle num={3} sm>
                Smaller subtitles
              </BlogNumberedTitle>
            </div>
          </div>

          <div className="mb-24">
            <span className="h5 mb-8">Bullets</span>

            <BlogList points={["Point 1", "Point 2", "Point 3"]} />
          </div>

          <div>
            <span className="h5 mb-8">Quotes</span>

            <BlogQuote source="Riku" color="orange">
              The future is now! Get yourself a cool sticker T-Shirt without
              never leaving Telegram.
            </BlogQuote>

            <BlogQuote source="Riku" color="green">
              The future is now! Get yourself a cool sticker T-Shirt without
              never leaving Telegram.
            </BlogQuote>

            <BlogQuote source="Uimahallin ukko">Onko vesi märkää?</BlogQuote>
          </div>
        </div>

        <BlogImageRow
          images={[
            {
              url: "https://via.placeholder.com/1980x960.jpg",
              alt: "Placeholder",
            },
          ]}
          captionContent="Source, comment, etc"
          captionTitle="Caption, if needed"
        />

        <BlogImageRow
          images={[
            {
              url: "https://via.placeholder.com/480x600.jpg",
              alt: "Placeholder",
            },
            {
              url: "https://via.placeholder.com/480x600.jpg",
              alt: "Placeholder",
            },
            {
              url: "https://via.placeholder.com/480x600.jpg",
              alt: "Placeholder",
            },
            {
              url: "https://via.placeholder.com/480x600.jpg",
              alt: "Placeholder",
            },
          ]}
          captionContent="Source, comment, etc"
          captionTitle="Caption, if needed"
        />
      </section>

      <SkaterBlock buttonUrl="/" buttonTxt="Check the bot out">
        Give the Telegram bot a try - and tell us what you think! :)
      </SkaterBlock>
    </Layout>
  );
};

export default BlogDetail;
