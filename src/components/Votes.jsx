import { useState } from "react";
import { incrementVote } from "../utils/api";

function Votes({ article }) {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  if (err) return <p id="error">{err}</p>;
  return (
    <div>
      <div id="button-votes-container">
        <button
          id="plus"
          onClick={(event) => {
            setVotes((currCount) => {
              return currCount + 1;
            });
            incrementVote(article.article_id, 1)
              .then(() => {
                setErr(null);
              })
              .catch((err) => {
                setErr("Uh Oh! Sorry. Something went wrong. Please try again.");
              });
          }}
        >
          +
        </button>

        <h6 id="article-votes">{article.votes + votes} Hits</h6>
        <button
          id="minus"
          onClick={(event) => {
            setVotes((currCount) => {
              return currCount - 1;
            });
            incrementVote(article.article_id, -1)
              .then(() => {
                setErr(null);
              })
              .catch((err) => {
                setErr("Uh Oh! Sorry. Something went wrong. Please try again.");
              });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Votes;
