import "./App.css";
import Weather from "./components/Weather";
import { useState } from "react";
import "./assets/styles/index.scss";
import { getDateFormatted } from "./tools/helpers";
import { useGet } from "./hooks/useGet";
import Spinner from "./components/Spinner";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");
  const { dayStr, dayNbr, month } = getDateFormatted();

  const { data, isLoading } = useGet(
    `https://goweather.herokuapp.com/weather/${place}`
  );

  return (
    <div className="app">
      <div className="container">
        <h1 className="app__title">Weather App</h1>
        <div className="app__intro">
          Today is <span> {`${dayStr} ${dayNbr} of ${month}`}</span>
          <p>
            What weather is in <strong>{`${inputValue}`}</strong>?
          </p>
        </div>

        <form className="app__search">
          <p>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="ex. Brno"
            />
          </p>
          <p>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setPlace(inputValue);
              }}
            >
              search
            </button>
          </p>
        </form>
        {/* <Weather className="main" place={place} /> */}
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <Weather className="main" data={data} place={place} />
          )}
        </>
      </div>
    </div>
  );
}

export default App;
