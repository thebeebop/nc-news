import { useState } from "react";
import { postComment } from "../utils/api";

function PostComment(article_id, comments) {
  const [commentBody, setCommentBody] = useState("");
  const [author, setAuthor] = useState("Elton John");
  const [updateCommentList, setUpdateCommentList] = useState([]);

  // optimistic renderring
  const handleSubmit = (event) => {
    let fakeComment = {
      author: author,
      body: "",
      created_at: "< 1 min ago",
      votes: 0,
    };

    event.preventDefault();
    setUpdateCommentList((comments) => {
      return [...comments, fakeComment];
    });
  };

  return (
    <label>
      <h1>POST A COMMENT</h1>
      <form
        onSubmit={() => {
          postComment(article_id, author, commentBody);
          setCommentBody("");
        }}
      >
        <button type="submit">Post</button>
      </form>
      <input
        value={commentBody}
        onChange={(event) => {
          setCommentBody(event.target.value);
          console.log(commentBody);
        }}
        placeholder="Write comment here..."
      ></input>
    </label>
  );
}

export default PostComment;
