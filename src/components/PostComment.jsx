import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { postComment } from "../utils/api";
import { userContext } from "../contexts";
import { useContext } from "react";

function PostComment(article_id) {
  const [commentBody, setCommentBody] = useState("");

  const [disableButton, setDisableButton] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const { user } = useContext(userContext);
  let author = user;

  return (
    <div id="leave-comment-container">
      <form
        id="comment-submit-form"
        onSubmit={(event) => {
          if (disableButton === false) {
            setCommentSubmitted(true);
            setDisableButton(true);
            event.preventDefault();
            postComment(article_id.article_id, author, commentBody).then(() => {
              setDisableButton(false);
              setCommentBody("");
            });
          }
        }}
      >
        <div id="post-comment-div">
          <input
            id="comment-input"
            minLength="1"
            type="text"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
              setCommentSubmitted(false);
            }}
            placeholder="Write a comment..."
            required
          ></input>
          <button id="post-comment-button" type="submit">
            Post
          </button>
        </div>
        {commentSubmitted === true ? (
          <div>
            <p id="comment-submitted">Comment Submitted!</p>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default PostComment;
