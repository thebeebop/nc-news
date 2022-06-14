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
