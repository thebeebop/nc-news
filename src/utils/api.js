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

export const incrementVote = (article_id, votes) => {
  return articlesApi
    .patch(`/articles/${article_id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data.update;
    });
};

export const getComments = (article_id) => {
  return articlesApi.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postComment = (article_id, author, body) => {
  return articlesApi
    .post(`articles/${article_id}/comments`, {
      author: author,
      body: body,
      votes: 0,
    })
    .then(({ data }) => {
      console.log(data, "<<<from API");
      return data;
    });
};
