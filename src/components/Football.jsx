import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";

function Football() {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      // Filter data
      const copyArticles = articles.filter(
        (article) => article.topic === "football"
      );
      setArticles(copyArticles);
      isLoading(false);
    });
  }, []);

  if (loading) {
    return <p id="loading">Loading...</p>;
  }
  return (
    //CSS Magic
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

        // Topic data manipulation
        let topicArray = [];
        let strArray = article.topic.split("");
        topicArray.push(strArray[0].toUpperCase());

        strArray.shift();
        strArray.forEach((char) => {
          topicArray.push(char);
        });

        // Time data manipulation
        let timeArr = article.created_at.split("");
        timeArr.splice(10, 0, "-");
        timeArr.splice(12, 0, "-");
        let timeSplice = timeArr.slice(0, 18);
        let time = timeSplice.join("");

        return (
          <li key={article.article_id} className="articles">
            <div id="article-topic-time">
              <h5 id={id}>{topicArray}</h5>
              <h6 id="article-created_at">{time}</h6>
            </div>
            <h3 id="article-title">{article.title}</h3>
            <h6 id="article-author">Posted by: {article.author}</h6>
            <p id="article-body">{article.body}</p>
            <h6 id="article-comments">Comments: {article.comment_count}</h6>
          </li>
        );
      })}
    </ul>
  );
}

export default Football;
