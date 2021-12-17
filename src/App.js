import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import axios from "axios";
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

  let fetchDone = true;

  const fetchData = async (place) => {
    const optionsForecast = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: place, days: "3" },
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    setIsLoading(true);
    setHasError(false);

    if (fetchDone) {
      fetchDone = false;

      await axios
        .request(optionsForecast)
        .then((response) => {
          let data = response.data;

          const currentDate = data.forecast.forecastday[0].date;
          const sunriseData = data.forecast.forecastday[0].astro.sunrise;
          const sunsetData = data.forecast.forecastday[0].astro.sunset;
          const forecast = data.forecast.forecastday.slice(1);

          data = {
            date: currentDate,
            location: data.location.name,
            country: data.location.country,
            icon: data.current.condition.icon,
            description: data.current.condition.text,
            temperature: data.current.temp_c,
            wind: data.current.wind_kph,
            windDirection: data.current.wind_dir,
            windDirectionDegree: data.current.wind_degree,
            humidity: data.current.humidity,
            pressure: data.current.pressure_mb,
            feelsLike: data.current.feelslike_c,
            localTime: data.location.localtime,
            sunrise: sunriseData,
            sunset: sunsetData,
            forecast: forecast.map((item) => {
              let dayObj = {
                date: item.date,
                description: item.day.condition.text,
                icon: item.day.condition.icon,
                minTemp: item.day.mintemp_c,
                maxTemp: item.day.maxtemp_c,
                maxWind: item.day.maxwind_kph,
                sunset: item.astro.sunset,
                sunrise: item.astro.sunrise,
              };

              return dayObj;
            }),
          };

          setData(data);
          setPlace(place);
        })
        .catch((error) => {
          //   console.log(error);
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
          setInputValue("");
          fetchDone = true;
        });
    }
  };

  return (
    <>
      {/* <Animator /> */}
      <div className="container">
        <div className="app">
          <Button />
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
