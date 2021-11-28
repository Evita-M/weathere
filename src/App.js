import "./App.css";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
      />
      <button onClick={() => setPlace(inputValue)}>search</button>

      <h1>Main Component</h1>
      <Weather place={place} />
    </div>
  );
}

export default App;
