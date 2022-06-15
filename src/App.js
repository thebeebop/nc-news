import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NavBar from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <NavBar />

      <Routes>
        <Route
          path="/articles/home"
          element={
            <div>
              <Articles />
            </div>
          }
        ></Route>
        <Route
          path="/articles/:topic"
          element={
            <div>
              <Articles />
            </div>
          }
        ></Route>
        <Route
          path="/articles/:topic/:article_id"
          element={<Article />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
