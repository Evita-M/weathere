import "./App.css";
import Weather from "./components/Weather";
import { useState } from "react";
import "./assets/styles/index.scss";
import { getDateFormatted } from "./tools/helpers";
// import { useGet } from "./hooks/useGet";
import Spinner from "./components/Spinner";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [titlePlace, setTitlePlace] = useState("");
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);
  const { dayStr, dayNbr, month } = getDateFormatted();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
    setTitlePlace(e.target.value);
  };

  const handleOnButtonClick = (e) => {
    e.preventDefault();
    fetchData(inputValue);
  };

  const fetchData = (place) => {
    setIsLoading(true);
    fetch(`https://goweather.herokuapp.com/weather/${place}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setPlace(place);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setInputValue("");
      });
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="app__title">Weather App</h1>
        <div className="app__intro">
          Today is <span> {`${dayStr} ${dayNbr} of ${month}`}</span>
          <p>
            What weather is in <strong>{`${titlePlace}`}</strong>?
          </p>
        </div>

        <form className="app__search">
          <p>
            <input
              type="text"
              value={inputValue}
              onChange={handleOnInputChange}
              placeholder="ex. Brno"
            />
          </p>
          <p>
            <button type="submit" onClick={handleOnButtonClick}>
              search
            </button>
          </p>
        </form>
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <Weather
              className="main"
              data={data}
              place={place}
              hasError={hasError}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default App;
