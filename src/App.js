import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import Animator from "./components/Animator";
import { useState } from "react";
import { getDateFormatted, makeFirstCapital } from "./tools/helpers";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [titlePlace, setTitlePlace] = useState("");
  const [place, setPlace] = useState("Test");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState({
    temperature: "1 C",
    wind: "15 km/h",
    description: "The owner of API is noob",
    forecast: [
      {
        day: 1,
        temperature: "1 C",
        wind: "15 km/h",
      },
      {
        day: 1,
        temperature: "1 C",
        wind: "15 km/h",
      },
      {
        day: 1,
        temperature: "1 C",
        wind: "15 km/h",
      },
    ],
  });
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
    fetch(`https://goweather.herokuapp.com/weather/${place}`, {
      mode: "no-cors",
    })
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
    <>
      {/* <Animator /> */}
      <div className="container">
        <div className="app">
          <h1 className="app__title">Weathere</h1>
          <div className="app__intro">
            Today is <strong> {`${dayStr} ${dayNbr} of ${month}`}</strong>
            <p>
              What's the weather in{" "}
              <strong>{`${makeFirstCapital(titlePlace)}`}</strong>?
            </p>
          </div>

          <form className="app__search">
            <p>
              <input
                type="text"
                value={makeFirstCapital(inputValue)}
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
          <div className="app__main">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
