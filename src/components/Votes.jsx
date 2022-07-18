import { useState } from "react";
import { incrementVote } from "../utils/api";
import {
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoChatboxOutline,
  IoRemoveCircleOutline,
  IoRemoveCircleSharp,
} from "react-icons/io5";

function Votes({ article }) {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [plusButtonSwitch, setPlusButtonSwitch] = useState(false);
  const [minusButtonSwitch, setMinusButtonSwitch] = useState(false);
  const [switchOne, setSwitchOne] = useState(false);
  const [switchTwo, setSwitchTwo] = useState(false);

  if (err) return <p id="error">{err}</p>;
  return (
    <div>
      <div id="button-votes-container">
        <button
          id="plus"
          onClick={(event) => {
            if (!switchTwo) {
              if (plusButtonSwitch) {
                setVotes((currCount) => {
                  return currCount - 1;
                });
                setSwitchOne(false);
                incrementVote(article.article_id, -1)
                  .then(() => {
                    setErr(null);
                  })
                  .catch((err) => {
                    setErr(
                      "Uh Oh! Sorry. Something went wrong. Please try again."
                    );
                  });
                setPlusButtonSwitch((currBool) => {
                  return !currBool;
                });
              }
              if (!plusButtonSwitch) {
                setVotes((currCount) => {
                  return currCount + 1;
                });
                setPlusButtonSwitch(true);
                setSwitchOne(true);
                incrementVote(article.article_id, 1)
                  .then(() => {
                    setErr(null);
                  })
                  .catch((err) => {
                    setErr(
                      "Uh Oh! Sorry. Something went wrong. Please try again."
                    );
                  });
              }
            }
          }}
        >
          {plusButtonSwitch ? (
            <IoAddCircleSharp className="minus-plus-buttons" />
          ) : (
            <IoAddCircleOutline className="minus-plus-buttons" />
          )}
        </button>

        <h6 id="article-votes">{article.votes + votes} Hits</h6>
        <button
          id="minus"
          onClick={(event) => {
            if (!switchOne) {
              if (minusButtonSwitch) {
                setVotes((currCount) => {
                  return currCount + 1;
                });
                setSwitchTwo(false);
                incrementVote(article.article_id, 1)
                  .then(() => {
                    setErr(null);
                  })
                  .catch((err) => {
                    setErr(
                      "Uh Oh! Sorry. Something went wrong. Please try again."
                    );
                  });
                setMinusButtonSwitch((currBool) => {
                  return !currBool;
                });
              }
              if (!minusButtonSwitch) {
                setVotes((currCount) => {
                  return currCount - 1;
                });
                setMinusButtonSwitch(true);
                setSwitchTwo(true);
                incrementVote(article.article_id, -1)
                  .then(() => {
                    setErr(null);
                  })
                  .catch((err) => {
                    setErr(
                      "Uh Oh! Sorry. Something went wrong. Please try again."
                    );
                  });
              }
            }
          }}
        >
          {minusButtonSwitch ? (
            <IoRemoveCircleSharp className="minus-plus-buttons" />
          ) : (
            <IoRemoveCircleOutline className="minus-plus-buttons" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Votes;
