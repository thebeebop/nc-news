import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import { timeConfig } from "../utils/styling";
import { deleteComment } from "../utils/api";
import PostComment from "../components/PostComment";
import { userContext } from "../contexts";
import { useContext } from "react";
import { IoCloseSharp, IoEllipsisHorizontalCircle } from "react-icons/io5";
function Comments({ article_id, handleClick }) {
  const [commentz, setComments] = useState([]);
  const [toggleBool, setToggleBool] = useState(false);
  const [areCommentsVisible, setAreCommentsVisible] = useState(true);
  const { user } = useContext(userContext);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [commentz]);

  function handleClick() {
    setToggleBool((currBool) => {
      return !currBool;
    });
  }

  return (
    <section>
      <div id="comments-container">
        <div id="hide-comments-container">
          <h2 id="comments-heading">Comments:</h2>
        </div>
        <ul id="comment-list">
          {areCommentsVisible
            ? commentz.map((comment) => {
                let time = timeConfig(comment);
                return (
                  <li className="individual-comment" key={comment.comment_id}>
                    <div id="edit-author-container">
                      <h1 className="comments" id="comment-author">
                        {comment.author}
                      </h1>
                      {toggleBool ? (
                        <>
                          <div id="overlay">
                            <div id="overlay-container">
                              <h1 id="are-you-sure">
                                Do you wish to delete this comment?
                              </h1>
                              <div id="delete-cancel-container">
                                {}
                                <button
                                  id="delete-button"
                                  onClick={() => {
                                    deleteComment(comment.comment_id).then(
                                      () => {
                                        setToggleBool((currBool) => {
                                          return !currBool;
                                        });
                                      }
                                    );
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  id="cancel-button"
                                  onClick={() => {
                                    handleClick();
                                  }}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {user === comment.author ? (
                        <button
                          id="edit-button"
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          <IoEllipsisHorizontalCircle />
                        </button>
                      ) : null}
                    </div>
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
              })
            : null}
        </ul>

        <PostComment article_id={article_id} comments={commentz} />
      </div>
    </section>
  );
}

export default Comments;
