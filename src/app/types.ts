export interface MediumBlogResponse {
  items: MediumBlogItem[];
  feed: MediumFeedItem;
}

export interface MediumFeedItem {
  link: string;
}

export interface MediumBlogItem {
  title: string;
  description: string;
  categories: string[];
  image: string;
}
