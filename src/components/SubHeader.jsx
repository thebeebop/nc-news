import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Setting a sub-header under the navbar,that re-renders when a specific topic is selected.
function SubHeader() {
  const [topik, setTopik] = useState();
  const { topic } = useParams();

  useEffect(() => {
    const topicAssign = () => {
      setTopik(topic);
      return topik;
    };

    topicAssign();
  }, [topik]);

  return <h2 id="sub-header">{topik}</h2>;
}

export default SubHeader;
