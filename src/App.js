import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NavBar from "./components/Nav";
import Comments from "./components/Comments";
import { Routes, Route } from "react-router-dom";
import { userContext } from "./contexts";
import { useState } from "react";
import UserLogin from "./components/UserLogin";

function App() {
  const [user, setUser] = useState("jessjelly");
  const [isPathToLogin, setIsPathToLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <div id="background"></div>
        {!isPathToLogin ? (
          <section>
            <header id="header">
              <Header setIsPathToLogin={setIsPathToLogin} />
            </header>
            <div id="mother-load-container">
              <NavBar />

              <Routes>
                <Route path="/" element={<Articles />}></Route>
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
          </section>
        ) : (
          <section>
            <UserLogin
              setUser={setUser}
              setIsPathToLogin={setIsPathToLogin}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          </section>
        )}
      </div>
    </userContext.Provider>
  );
}

export default App;
