import { useState, useEffect } from "react";
import { getArticles, getArticleById, incrementVote } from "../utils/api";
import { useParams } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";
import Votes from "./Votes";
import SubHeader from "./SubHeader";
import Comments from "./Comments";
function Article() {
  const [article, setArticle] = useState([]);
  const [loading, isLoading] = useState(true);
  const { article_id } = useParams();
  let { topic } = useParams();
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      isLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p id="loading">Loading...</p>;
  }

  const flipAreCommentsVisibleBoolean = () => {
    setAreCommentsVisible((currBool) => !currBool);
  };

  let id = topicColor(article); // Change color of topic text
  let topik = topicCapitalise(article); // Capitalise topic text
  let time = timeConfig(article); // Time data re-configure

  return (
    <div>
      <SubHeader topic={topic} />
      <ul id="list-container">
        <li key={article.article_id}>
          <div id="article-topic-time">
            <h6 className="article-text" id="article-created_at">
              {time}
            </h6>
          </div>
          <h3 className="article-text" id="article-title">
            {article.title}
          </h3>

          <h5 className="article-text" id="article-author">
            Posted by: {article.author}
          </h5>
          <h6 className="article-text" id={id}>
            {topik}
          </h6>

          <h6 className="article-text" id="article-id">
            {/* {article.article_id} */}
          </h6>

          <p className="article-text" id="single-article-body">
            {article.body}
          </p>
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
      </ul>
    </div>
  );
}

export default Article;
