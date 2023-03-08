import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-dweo.onrender.com/api",
});

export const getArticles = (topic, sortBy, order) => {
  if (topic === "home") {
    topic = undefined;
  }
  return articlesApi
    .get("/articles", {
      params: { topic: topic, sort_by: sortBy, order: order },
    })
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

export const getUsers = () => {
  return articlesApi.get("/users").then(({ data }) => {
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
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return articlesApi.delete(`comments/${comment_id}`);
};
