import "./App.css";
import Weather from "./components/Weather";
import { useState } from "react";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");
  return (
    <div className="app">
      <h1>WEATHER APP</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
      />
      <button onClick={() => setPlace(inputValue)}>search</button>

      <Weather className="main" place={place} />
    </div>
  );
}

export default App;
