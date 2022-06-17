import { useState, useEffect } from "react";
import { getArticles, getArticleById, incrementVote } from "../utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";
import Votes from "../components/Votes";
import SubHeader from "./SubHeader";
import Comments from "./Comments";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, [topic]);

  const flipAreCommentsVisibleBoolean = () => {
    setAreCommentsVisible((currBool) => !currBool);
  };

  if (loading) {
    return <p id="loading">Loading...</p>;
  }

  let number = 0;
  return (
    <div>
      <div>
        <SubHeader topic={topic} />
        {loading != false ? <p>Loading...</p> : null}
      </div>

      <ul id="list-container">
        {articles.map((article) => {
          number++;
          let id = topicColor(article); // Change color of topic text
          let topik = topicCapitalise(article); // Capitalise first letter of topic text
          let time = timeConfig(article); // Time data re-configure
          let body = bodyConfig(article); // Cut body text to 30 characters
          return (
            <li key={article.article_id} className="articles">
              <h6 className="article-text" id="article-created_at">
                {time}
              </h6>
              <h3 className="article-text" id="article-title">
                {article.title}
              </h3>

              <h6 className="article-text" id="article-author">
                Posted by: {article.author}
              </h6>
              <h5 className="article-text" id={id}>
                {topik}
              </h5>

              <h6 className="article-text" id="article-id">
                {number}
              </h6>

              <p className="article-text" id="article-body">
                {body}
              </p>
              <Link
                id="article-link"
                to={`/articles/${topic}/${article.article_id}`}
              >
                Read More
              </Link>

              <div id="mother-container">
                <Votes article={article} />
                <div>
                  <div id="line-seperator"></div>
                </div>
                <button
                  id="comments-button"
                  onClick={(event) => {
                    flipAreCommentsVisibleBoolean();
                  }}
                >
                  • {article.comment_count} Comments
                </button>
              </div>
              {areCommentsVisible ? (
                <Comments article_id={article.article_id} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
