import { useState, useEffect } from "react";
import { getArticles, getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";

function Article() {
  const [article, setArticle] = useState([]);
  const [loading, isLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      isLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p id="loading">Loading...</p>;
  }

  let id = topicColor(article); // Change color of topic text
  let topik = topicCapitalise(article); // Capitalise topic text
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
          <h5 id={id}>{topik}</h5>
        </div>
        <p id="single-article-body">{article.body}</p>
        <div id="article-comments-votes">
          <h6 id="article-comments">{article.comment_count} Comments</h6>
          <h6 id="article-votes">{article.votes} Votes</h6>
        </div>
      </li>
    </ul>
  );
}

export default Article;
