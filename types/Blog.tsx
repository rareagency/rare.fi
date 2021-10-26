export interface Post {
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  cover_image: string;
  cover_image_alt?: string;
  reading_time_minutes: number;
  tag_list: string;
  tags: string[];
  user: User;
}

interface User {
  name: string;
  twitter_username?: string;
  github_username?: string;
  website_url?: string;
  profile_image: string;
}
