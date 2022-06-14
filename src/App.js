import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import NavBar from "./components/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <NavBar />
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:topic" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
