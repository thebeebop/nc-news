import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Articles />
    </div>
  );
}

export default App;
