import * as React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

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
        let topicArray = [];
        let strArray = topic.slug.split("");
        let shift = strArray.shift();
        topicArray.push(shift.toUpperCase());
        strArray.forEach((char) => {
          topicArray.push(char);
        });

        return (
          <Link className="nav" key={topic.slug} to={`/articles/${topic.slug}`}>
            {topicArray.join("")}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
