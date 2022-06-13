import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-info-site.herokuapp.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then(({ data }) => {
    console.log(data);
    return data;
  });
};
