import * as React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/articles">Home</Link>
      <Link to="/articles/coding">Coding</Link>
      <Link to="/articles/cooking">Cooking</Link>
      <Link to="/articles/football">Football</Link>
    </nav>
  );
}

export default NavBar;
