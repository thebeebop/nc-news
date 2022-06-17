import { useState } from "react";
import { postComment } from "../utils/api";

function PostComment(article_id, comments) {
  const [commentBody, setCommentBody] = useState("");
  const [author, setAuthor] = useState("jessjelly");
  const [disableButton, setDisableButton] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  // if error re-enable button on upon error.
  //disable button on click

  // const [updateCommentList, setUpdateCommentList] = useState([]);
  // const [fakeComment, setFakeComment] = useState([
  //   {
  //     author: author,
  //     body: "",
  //     created_at: "< 1 min ago",
  //     votes: 0,
  //   },
  // ]);

  // console.log(commentBody, "<<commentBody");

  // console.log(article_id.article_id, "<<<article-id");
  // const handleSubmit = (event) => {
  //   // optimistic renderring
  //   event.preventDefault();
  //   setUpdateCommentList((comments) => {
  //     return [...comments, fakeComment];
  //   });
  // };

  return (
    <div>
      <h1>POST A COMMENT</h1>
      <form
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
        <button type="submit">Post</button>

        <input
          minLength="1"
          type="text"
          value={commentBody}
          onChange={(event) => {
            setCommentBody(event.target.value);
            setCommentSubmitted(false);
          }}
          placeholder="Write comment here..."
          required
        ></input>

        {commentSubmitted === true ? (
          <div>
            <p>Comment Submitted</p>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default PostComment;
