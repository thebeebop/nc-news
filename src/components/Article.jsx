import { useState, useEffect } from "react";
import {
  getArticles,
  getArticleById,
  incrementVote,
  deleteComment,
} from "../utils/api";
import { useParams, Link } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";
import Votes from "./Votes";
import SubHeader from "./SubHeader";
import Comments from "./Comments";
import { IoChatboxOutline, IoChevronBackCircleSharp } from "react-icons/io5";
import Loading from "../components/Loading";
function Article() {
  const [article, setArticle] = useState([]);
  const [loading, isLoading] = useState(true);
  const { article_id } = useParams();
  let { topic } = useParams();
  const [areCommentsVisible, setAreCommentsVisible] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      isLoading(false);
    });
  }, [article_id]);

  if (loading)
    return (
      <div id="spinner">
        <Loading />
        <h3>Be with you shortly...</h3>
      </div>
    );

  const flipAreCommentsVisibleBoolean = () => {
    setAreCommentsVisible((currBool) => !currBool);
  };

  let id = topicColor(article); // Change color of topic text
  let topik = topicCapitalise(article); // Capitalise topic text
  let time = timeConfig(article); // Time data re-configure

  return (
    <div id="mother-article-container">
      <div id="single-article-header">
        <SubHeader id="subheader-link" topic={topic} />

        <Link to={`/articles/${topic}`}>
          <IoChevronBackCircleSharp id="go-back-button" />
        </Link>
      </div>

      <ul id="list-container-2">
        <li key={article.article_id}>
          <div id="article-topic-time"></div>
          <h3 className="article-text" id="article-title">
            {article.title}
          </h3>

          <h5 className="article-text" id="article-author">
            by: {article.author}
          </h5>
          <h6 className="article-text" id="article-created_at">
            on {time}
          </h6>
          <h6 className="article-text" id={id}>
            {topik}
          </h6>

          <h6 className="article-text" id="article-id"></h6>

          <p className="article-text" id="single-article-body">
            {article.body}
          </p>

          <div id="mother-container-2">
            <Votes article={article} />
            <div>
              <div id="line-seperator"></div>
            </div>
            <Link to={`/articles/${topic}/${article.article_id}`}>
              <div id="comments">
                <IoChatboxOutline id="comment-img" />
                <button
                  id="comments-button"
                  onClick={(event) => {
                    flipAreCommentsVisibleBoolean();
                  }}
                >
                  {article.comment_count} Comments
                </button>
              </div>
            </Link>
          </div>
        </li>
      </ul>
      <div id="empty-space"></div>
      {areCommentsVisible ? <Comments article_id={article.article_id} /> : null}
    </div>
  );
}

export default Article;
