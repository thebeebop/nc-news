import { useState, useEffect } from "react";
import { getArticles, getArticleById } from "../utils/api";
import { Link } from "react-router-dom";
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

  return (
    <ul id="list-container">
      {articles.map((article) => {
        let id = topicColor(article); // Change color of topic text
        let topik = topicCapitalise(article); // Capitalise first letter of topic text
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
              <h5 id={id}>{topik}</h5>
            </div>
            <p id="article-body">{body}</p>
            <Link
              id="article-link"
              to={`/articles/${topic}/${article.article_id}`}
            >
              View Article
            </Link>
            <div id="article-comments-votes">
              <h6 id="article-comments">{article.comment_count} Comments</h6>
              <h6 id="article-votes">{article.votes} Votes</h6>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Articles;
