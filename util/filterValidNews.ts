import { TNews, TResponseData } from "./types";

export const filterValidNews = (arr: TResponseData[]): TNews[] => {
  return arr.filter(
    (news) =>
      news.content &&
      news.url &&
      news.title &&
      news.urlToImage &&
      news.author &&
      news
  );
};
