import { useState } from "react";
import { useParams } from "react-router-dom";
import { topicCapitalised } from "../utils/styling";

function SubHeader({ topic }) {
  if (topic === undefined) {
    topic = "Home";
  }

  let topik = topicCapitalised(topic);

  return <h2 id="sub-header">{topik}</h2>;
}

export default SubHeader;
