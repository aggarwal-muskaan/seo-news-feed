export type THeaderProps = {
  mainHeading?: string;
};

export type TPageProps = {
  news: TResponseData[];
};

export type TDynamicPageProps = {
  news: TResponseData[];
  topic: string;
};

export type TLayoutProps = {
  news: TNews[];
};

export type TNews = {
  source: {
    id: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type TResponseData = {
  source: {
    id: null | string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
