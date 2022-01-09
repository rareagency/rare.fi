import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogParagraph from "../../components/Blog/BlogParagraph";
import BlogStaticImage from "../../components/Blog/BlogStaticImage";
import SkaterBlock from "../../components/SkaterBlock";
import Layout from "../../layouts/Page";
import imageOne from "../../public/static/blog/pyry-career-story/hand.jpg";
import headerImg from "../../public/static/blog/pyry-career-story/header.jpg";
import imageTwo from "../../public/static/blog/pyry-career-story/pyry.jpg";
import { getStaticMetaData } from "../../utils/blog";
const metaData = getStaticMetaData("pyry-career-story");

const PyryCareerStory = () => {
  return (
    <Layout title={metaData.title}>
      <BlogHeader
        title={metaData.title}
        image={headerImg}
        imageAlt={metaData.cover_image_alt || ""}
        tags={metaData.tags}
        intro={metaData.description}
        publishedAtReadable={metaData.readable_publish_date}
        publishedAt={metaData.published_at}
        readLength={metaData.reading_time_minutes}
      />

      <section className="layout-grid col-span-6 col-start-2 pb-32 px-8 mt-16 md:px-0">
        <BlogAuthorSection
          name={metaData.user.name}
          avatarUrl={metaData.user.profile_image}
          githubUrl={`https://github.com/${metaData.user.github_username}`}
        />

        <div className="col-span-5 xl:col-all">
          <BlogParagraph title="A dream of the modern consultancy">
            In many ways, being a part of Rare was meant to be. In a
            conversation with Pyry&apos;s brother, Riku, who is a co-founder
            &amp; acting CEO of Rare, he noted how, being merely teenagers,
            they&apos;ve been circulating an idea about starting their own
            agency one day. It&apos;s important to experience how such software
            consultancies are operated from the inside, which both Pyry &amp;
            Riku both did successfully.
          </BlogParagraph>

          <BlogParagraph>
            As a result, during his Computer Science studies Pyry was already
            successfully building software for the leading Finnish retail chain
            &amp; culture venue platform in Futurice, a known Finnish software
            consultancy agency, and practiced software development as a
            freelancer.
          </BlogParagraph>

          <BlogStaticImage src={imageOne} alt="Wooden model hand" />

          <BlogParagraph title="Pyry's journey with Rare">
            In 2019, Rare Agency found its place on the map of Tampere, and Pyry
            became an essential part of it. He fits in like a piece of a puzzle,
            identifying his full-stack development capability as a secret sauce
            of Rare. In his own words, &quot;If someone wants to do something,
            he or she does it.&quot; Staying small like Rare is also beneficial
            because the more people a company tends to have, the more specified
            roles become.
          </BlogParagraph>

          <BlogStaticImage src={imageTwo} alt="Pyry on phone" />

          <BlogParagraph title="What does Pyry like about Rare Agency?">
            Flexibility. It&apos;s a company full of autonomy and ownership,
            competitive compensation, trust, and transparent communication.
            It&apos;s a place where you get to learn daily while making the best
            of your toolset and adapting to the stack of others. But above all,
            at Rare I&apos;m working with my friends.
          </BlogParagraph>
        </div>
      </section>

      <SkaterBlock buttonUrl="/contact-us" buttonTxt="Let's chat">
        Work with Pyry. Join Rare.
      </SkaterBlock>
    </Layout>
  );
};

export default PyryCareerStory;
