import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import { timeConfig } from "../utils/styling";

import PostComment from "../components/PostComment";
function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [comments]);

  //   console.log(article_id, "<<< from comments");
  return (
    <ul id="comment-list">
      <div id="comments-container">
        <h2 id="comments-heading">Comments:</h2>
        {comments.map((comment) => {
          let time = timeConfig(comment);
          return (
            <li className="individual-comment" key={comment.comment_id}>
              <h1 className="comments" id="comment-author">
                {comment.author}
              </h1>
              <h2 className="comments" id="comment-created_at">
                {time}
              </h2>
              <h3 className="comments" id="comment-body">
                {comment.body}
              </h3>
              <h4 className="comments" id="comment-votes">
                {comment.votes} Hits
              </h4>
            </li>
          );
        })}
        <PostComment article_id={article_id} comments={comments} />
      </div>
    </ul>
  );
}

export default Comments;
