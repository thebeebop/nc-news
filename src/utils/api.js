import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-info-site.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return articlesApi
    .get("/articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data;
  });
};
