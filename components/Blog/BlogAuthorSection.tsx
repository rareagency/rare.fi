import React from "react";

interface Props {
  name: string;
  avatarUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const BlogAuthorSection = ({
  name,
  avatarUrl,
  githubUrl,
  twitterUrl,
  linkedinUrl,
  instagramUrl,
}: Props) => {
  return (
    <aside className="col-start-6 col-span-2 flex flex-col items-center xl:col-all xl:mb-12">
      <img
        className="mb-4"
        src={avatarUrl}
        alt={name}
        width="128"
        height="128"
      />

      <span className="tag block my-4">Written by</span>
      <span className="h5 border-b-2 border-dark-blue block">{name}</span>

      <section id="socials" className="flex mt-4">
        {githubUrl && (
          <a href={githubUrl}>
            <img src="/static/social-media/github.svg" alt="GitHub logo" />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl}>
            <img src="/static/social-media/twitter.svg" alt="Twitter logo" />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl}>
            <img src="/static/social-media/linkedin.svg" alt="Linkedin logo" />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl}>
            <img
              src="/static/social-media/instagram.svg"
              alt="Instagram logo"
            />
          </a>
        )}
      </section>

      <style jsx>
        {`
          #socials img {
            @apply w-8 h-8 mr-2;
          }
        `}
      </style>
    </aside>
  );
};

export default BlogAuthorSection;
