import { useState, useEffect } from "react";
import { getArticles, getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, [topic]);

  if (loading) {
    return <p id="loading">Loading...</p>;
  }
  if (articles.length > 1) {
    return (
      <ul id="list-container">
        {articles.map((article) => {
          let id = topicColor(article); // Change color of topic text
          let topic = topicCapitalise(article); // Capitalise topic text
          let time = timeConfig(article); // Time data re-configure
          let body = bodyConfig(article); // Cut body text to 30 characters

          return (
            <li key={article.article_id} className="articles">
              <div id="article-topic-time">
                <h6 id="article-created_at">{time}</h6>
              </div>
              <h3 id="article-title">{article.title}</h3>
              <div>
                <h6 id="article-author">Posted by: {article.author}</h6>
                <h5 id={id}>{topic}</h5>
              </div>
              <p id="article-body">{body}</p>
              <button
                onClick={(event) => {
                  getArticleById(article.article_id).then(({ article }) => {
                    setArticles(article);
                  });
                }}
                id="button-view-article"
              >
                View Article
              </button>
              <h6 id="article-comments">Comments: {article.comment_count}</h6>
            </li>
          );
        })}
      </ul>
    );
  } else {
    let article = articles;
    let id = topicColor(article); // Change color of topic text
    let topic = topicCapitalise(article); // Capitalise topic text
    let time = timeConfig(article); // Time data re-configure

    return (
      <ul id="list-container">
        <li key={article.article_id} className="single-article">
          <div id="article-topic-time">
            <h6 id="article-created_at">{time}</h6>
          </div>
          <h3 id="article-title">{article.title}</h3>
          <div>
            <h6 id="article-author">Posted by: {article.author}</h6>
            <h5 id={id}>{topic}</h5>
          </div>
          <p id="single-article-body">{article.body}</p>

          <h6 id="article-comments">Comments: {article.comment_count}</h6>
        </li>
      </ul>
    );
  }
}

export default Articles;
