import "./App.css";
import Card from "./Card";
import SearchBar from "./SearchBar";

function App() {
  //const Countries = "./Countries.json";
  return (
    <div className="App">
      <header className="App-header">Where in the word?</header>
      <div className="Body">
        <SearchBar />
        <div className="Card-container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
