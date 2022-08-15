
# SEO News Feed

This project is developed to practice SEO integration in Next.js project.


## Lessons Learned

Ways used to integrate SEO from [Next.js official documentation](https://nextjs.org/learn/seo/introduction-to-seo) :

1. Static Site Generation (SSG)
2. Incremental Static Regeneration (ISR)
3. Add robots.txt file
4. Create Sitemap.xml file
5. Metadata 

 
Note: You should use a custom domain name because by default vercel prevent search engines from **indexing** a subdomain, and this is good for avoiding duplicated content.


## API Reference

Get your API key from [here](https://newsapi.org/).

#### Get top headlines 

```http
  GET /api/top-headlines/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `sources` | `string` | 2 letter ISO country code   |
| `category`| `string` | Refer [docs](https://newsapi.org/docs/endpoints/top-headlines)|

#### Get articles related to keyword

```http
  GET /api/everything/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `apiKey` | `string` | **Required**. Your API key        |
| `q`       | `string` | Keywords or phrases to search    |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`NEXT_PUBLIC_BASE_URL`


## Demo

https://latest-news.vercel.app/


## Tech Stack

Next.js, Chakra UI, Typescript

