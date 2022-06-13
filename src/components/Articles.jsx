import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ul id="list-container">
      {articles.map((article) => {
        return (
          <>
            <li key={article.article_id} className="articles">
              <h3 id="article-title">{article.title}</h3>
              <h5 id="article-topic">{article.topic}</h5>
              <p id="article-body">{article.body}</p>
              <h5 id="article-author">{article.author}</h5>
              <h6 id="article-comments">Comments: {article.comment_count}</h6>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Articles;
