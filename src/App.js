import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NavBar from "./components/Nav";
import Home from "./components/Home";
import Comments from "./components/Comments";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <NavBar />

      <Routes>
        <Route path="/articles/home" element={<Home />}></Route>
        <Route path="/articles/:topic" element={<Articles />}></Route>
        <Route
          path="/articles/:topic/:article_id"
          element={<Article />}
        ></Route>
        <Route
          path="/articles/:topic/:article_id/comments"
          element={<Comments />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
