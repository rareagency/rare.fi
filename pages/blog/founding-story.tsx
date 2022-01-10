import BlogAuthorSection from "../../components/Blog/BlogAuthorSection";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogParagraph from "../../components/Blog/BlogParagraph";
import BlogQuote from "../../components/Blog/BlogQuote";
import BlogStaticImage from "../../components/Blog/BlogStaticImage";
import Layout from "../../layouts/Page";
import imageTwo from "../../public/static/blog/founding-story/cihan-replying.jpg";
import headerImg from "../../public/static/blog/founding-story/header.jpg";
import imageOne from "../../public/static/blog/founding-story/janne-feeling-fabulous.jpg";
import imageThree from "../../public/static/blog/founding-story/riku-after-solving-a-problem.jpg";
import { getStaticMetaData } from "../../utils/blog";
const metaData = getStaticMetaData("founding-story");

const FoundingStory = () => {
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

      <section className="layout-grid col-span-6 col-start-2 pb-16 px-8 mt-16 md:px-0">
        <BlogAuthorSection
          name={metaData.user.name}
          avatarUrl={metaData.user.profile_image}
          githubUrl={`https://github.com/${metaData.user.github_username}`}
        />

        <div className="col-span-5 xl:col-all">
          <BlogParagraph>
            3 software developers walked into a bar. The first, Riku Rouvila,
            got his first commercial gig at mere 17 years of age after building
            small games and websites for fun. The second, Janne Kallunki, beat
            Riku by a few years and successfully tripled Lapland cottage sales
            through digital channels when he was 12. The third, Cihan Bebek,
            didn&apos;t even write his first piece of code until starting his
            university studies but was a keen follower of technology and its
            full potential. Being in the right place at the right time defined
            their fate. Except that the bar wasn&apos;t a bar at all. It was
            Leonidas, a software development agency based in Tampere, where
            Cihan, Riku, and Janne crossed paths one day. That&apos;s where the
            founding story of Rare really began.
          </BlogParagraph>

          <BlogParagraph>
            However, their paths split when Riku and Cihan began practicing
            software consultancy elsewhere with the likes of Futurice, one of
            the leading software agencies in Finland. Finally, in 2019, Rare
            gets founded as a challenge to the industry - developing excellent
            software, the new way. The Rare way.
          </BlogParagraph>

          <BlogQuote source="Riku" color="green">
            Some of us had to go through the path of seeing how software
            companies can be operated first before it was realistic to do it by
            ourselves
          </BlogQuote>

          <BlogStaticImage
            src={imageOne}
            alt="Janne feeling fabulous on a Friday night"
            outerWidth={400}
          />

          <BlogParagraph title="If you can think it, you can do it">
            Over the past decades, the digitalisation really took off. For the
            founders of Rare, the development and possibilities of the digital
            services and tools seemed countless. It gave way to experiments that
            later led to the honed craft and skill set that defines a modern
            developer today.
          </BlogParagraph>

          <BlogParagraph>
            However, not every developer is capable of keeping a sharp eye on
            the code. It&apos;s common for developers to get productive from day
            one while generally keeping code wasteful &amp; unoptimised. The
            modern challenge is about going deeper into the code and think how
            to make work more efficient while keeping software healthy and lean.
          </BlogParagraph>

          <BlogQuote source="Janne" color="orange">
            I have a huge respect for developers that can run a rocket ship
            there and back
          </BlogQuote>

          <BlogParagraph>
            Rare&apos;s approach is simple: we&apos;ve got to give back what we
            do best to kickstart the cycle of impact. That&apos;s why Cihan and
            Riku started Koodiklinikka, the biggest Slack community in Finland
            currently worth 4,000 users that provides developers with code
            reviews and pro tips. Not only do they help thousands to write
            efficient code, but many clients and sources of revenue find their
            way to Rare through Koodiklinikka.
          </BlogParagraph>

          <BlogStaticImage
            src={imageTwo}
            alt="Cihan replying to Koodiklinikka peeps"
            outerWidth={400}
          />

          <BlogQuote source="Riku" color="green">
            It&apos;s always that I see a problem and want to fix a problem of
            my own and then decide to do it. But it&apos;s about freedom - if
            you want to do the same, come and do it with me
          </BlogQuote>

          <BlogParagraph title="The company that accepts everyone">
            There&apos;s a bigger idea to Rare, as it wants to get the best
            possible software team. Rare is responsible for providing worthwhile
            projects, feedback, and learning to everyone who hops on their boat.
            If colleagues challenge one another, they inspire constant
            development. Giving full autonomy to everyone helps Rare stay
            operational and happy, regardless of how small - it&apos;s much more
            challenging to force 200+ people to acknowledge &amp; support each
            other.
          </BlogParagraph>

          <BlogParagraph>
            While growing the company might not be the top priority, growing
            Rare talent certainly is. All three Rare founders see the personal
            &amp; professional growth support and showing the ropes of the
            industry as their primary responsibility in the company. They do it
            well with years of combined experience in coaching, podcasting,
            entrepreneurship, and consultancy.
          </BlogParagraph>

          <BlogQuote source="Janne" color="orange">
            We have a lot of junior devs working with us, and time spent
            together is time well spent. I see the current junior developers
            working as senior developers &amp; coaching others back - this is
            the cycle of learning
          </BlogQuote>

          <BlogStaticImage
            src={imageThree}
            alt="Riku after solving a really challenging problem"
          />

          <BlogParagraph>
            If there were a secret sauce to Rare, it would be the levels of
            mutual admiration between the founders. There&apos;s something
            unique in seeing people you respect to find their way, follow their
            ambition, challenge the norm, and do the right thing.
          </BlogParagraph>

          <BlogParagraph>
            In October 2021, Rare opened the doors to the new office in central
            Tampere. Soon after, Rare launched its new website to show its fresh
            face and welcome the Finnish and international companies and
            individuals to a conversation.
          </BlogParagraph>
        </div>
      </section>

      {/* <SkaterBlock buttonUrl="/" buttonTxt="TODO">
        TODO: Add Skater text
      </SkaterBlock> */}
    </Layout>
  );
};

export default FoundingStory;
