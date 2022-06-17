import { useState } from "react";
import { postComment } from "../utils/api";

function PostComment(article_id, comments) {
  const [commentBody, setCommentBody] = useState("");
  const [author, setAuthor] = useState("Elton John");
  const [updateCommentList, setUpdateCommentList] = useState([]);
  const [fakeComment, setFakeComment] = useState([
    {
      author: author,
      body: "",
      created_at: "< 1 min ago",
      votes: 0,
    },
  ]);

  // optimistic renderring
  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdateCommentList((comments) => {
      return [...comments, fakeComment];
    });
    setFakeComment({
      author: author,
      body: "",
      created_at: "< 1 min ago",
      votes: 0,
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
        type="text"
        value={commentBody}
        onChange={(event) => {
          fakeComment.body = event.target.value;
          setCommentBody(event.target.value);
        }}
        placeholder="Write comment here..."
      ></input>
    </label>
  );
}

export default PostComment;
