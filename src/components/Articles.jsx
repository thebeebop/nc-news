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
    return <p id="loading">Loading...</p>;
  }
  return (
    <ul id="list-container">
      {articles.map((article) => {
        let id = "";
        if (article.topic === "cooking") {
          id = "article-topic-cooking";
        } else if (article.topic === "football") {
          id = "article-topic-football";
        } else if (article.topic === "coding") {
          id = "article-topic-coding";
        }

        let emptyArray = [];
        let strArray = article.topic.split("");
        emptyArray.push(strArray[0].toUpperCase());

        strArray.shift();
        strArray.forEach((char) => {
          emptyArray.push(char);
        });

        let timeArr = article.created_at.split("");
        timeArr.splice(10, 0, "-");
        timeArr.splice(12, 0, "-");
        let timeSplice = timeArr.slice(0, 18);
        let time = timeSplice.join("");

        return (
          <>
            <li key={article.article_id} className="articles">
              <h5 id={id}>{emptyArray}</h5>
              <h3 id="article-title">{article.title}</h3>
              <h6 id="article-created_at">{time}</h6>
              <p id="article-body">{article.body}</p>
              <div id="article-author-comments">
                <h5 id="article-author">{article.author}</h5>
                <h6 id="article-comments">Comments: {article.comment_count}</h6>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Articles;
