import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import { timeConfig } from "../utils/styling";
import Article from "./Article";
import Votes from "./Votes";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

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

              {/* <h4 className="comments" id="comment-votes">
                {comment.votes} Votes
              </h4> */}
              <div id="comments-votes-container">
                <button
                  id="plus"
                  onClick={(event) => {
                    setVotes((currCount) => {
                      return currCount + 1;
                    });
                  }}
                >
                  +
                </button>
                <h6 id="comment-votes">{comment.votes + votes} Hits</h6>
                <button
                  id="minus"
                  onClick={(event) => {
                    setVotes((currCount) => {
                      return currCount - 1;
                    });
                  }}
                >
                  -
                </button>
              </div>
            </li>
          );
        })}
      </div>
    </ul>
  );
}

export default Comments;
