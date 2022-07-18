import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import {
  topicColor,
  topicCapitalise,
  timeConfig,
  bodyConfig,
} from "../utils/styling";
import Votes from "../components/Votes";
import SubHeader from "./SubHeader";
import SortBy from "./SortBy";
import { IoChatboxOutline } from "react-icons/io5";
import Loading from "../components/Loading";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let sortBy = searchParams.get("sort_by");
  let order = searchParams.get("order");

  useEffect(() => {
    getArticles(topic, sortBy, order).then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, [topic, sortBy, order]);

  const flipAreCommentsVisibleBoolean = () => {
    setAreCommentsVisible((currBool) => !currBool);
  };

  if (loading)
    return (
      <div id="spinner">
        <Loading />
        <h3>Be with you shortly...</h3>
      </div>
    );

  return (
    <div id="mother-articles-container">
      <div className="sort-by-container">
        <SubHeader topic={topic} />

        <div id="sortby-dropdown-container">
          <p id="sort-by">Sort by:</p>
          <SortBy setSearchParams={setSearchParams} />
        </div>
      </div>

      <ul id="list-container">
        {articles.map((article) => {
          let id = topicColor(article); // Change color of topic text
          let topik = topicCapitalise(article); // Capitalise first letter of topic text
          let time = timeConfig(article); // Time data re-configure
          let body = bodyConfig(article); // Cut body text to 30 characters
          return (
            <li key={article.article_id} className="articles">
              <h3 className="article-text" id="article-title">
                {article.title}
              </h3>

              <h6 className="article-text" id="article-author">
                Posted by: {article.author}
              </h6>
              <h6 className="article-text" id="article-created_at">
                on {time}
              </h6>
              <h5 className="article-text" id={id}>
                {topik}
              </h5>

              <div id="article-number-container">
                <p id="article-number-title">Article No:</p>
                <h6 id="article-id">{article.article_id}</h6>
              </div>

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
                <Link to={`/articles/${topic}/${article.article_id}`}>
                  <div id="comments">
                    <IoChatboxOutline id="comment-img" />
                    <p id="comments-button-link">
                      {article.comment_count} Comments
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
