import * as React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { topicSlugCapitalised } from "../utils/styling";
function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav id="navbar">
      <Link className="nav" to="/articles/home">
        Home
      </Link>
      {topics.map((topic) => {
        //Capitalizing the topic strings
        let topik = topicSlugCapitalised(topic);
        return (
          <Link className="nav" key={topic.slug} to={`/articles/${topic.slug}`}>
            {topik}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
