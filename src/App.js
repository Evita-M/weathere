import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import axios from "axios";

import {
  Air,
  Thermostat,
  InvertColors,
  Compress,
  HistoryToggleOff,
  Nightlight,
  WbTwilight,
  Explore,
} from "@mui/icons-material";

import { useState } from "react";
import { getDateFormatted, makeFirstCapital } from "./tools/helpers";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);
  const [infoItems, setInfoItems] = useState(null);
  const { dayStr, dayNbr, month } = getDateFormatted();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
    setPlace(e.target.value);
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
            localTime: data.location.localtime,
            temperature: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
            windDirection: data.current.wind_dir,
            sunrise: sunriseData,
            sunset: sunsetData,
            pressure: data.current.pressure_mb,
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
          setInfoItems(transformData(data));
          setData(data);
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

  const transformData = (data) => {
    let objectEntries = Object.entries(data);
    let fitleredData = objectEntries.filter((item) => {
      const infoItems = [
        "location",
        "country",
        "icon",
        "description",
        "forecast",
        "date",
      ];

      return infoItems.includes(item[0]) === false;
    });

    let tranformedData = fitleredData.map((item, index) => {
      let iconSizeLg = 22;
      let unit;
      let icon;
      let title;

      switch (item[0]) {
        case "localTime":
          icon = <HistoryToggleOff sx={{ fontSize: iconSizeLg }} />;
          title = "Local Time";
          break;

        case "temperature":
          icon = <Thermostat sx={{ fontSize: iconSizeLg }} />;
          title = "Temperature";
          unit = "°C";
          break;

        case "feelsLike":
          icon = <Thermostat sx={{ fontSize: iconSizeLg }} />;
          title = "Feels Like";
          unit = "°C";
          break;

        case "windDirection":
          icon = <Explore sx={{ fontSize: iconSizeLg }} />;
          title = "Wind Direction";
          break;

        case "wind":
          icon = <Air sx={{ fontSize: iconSizeLg }} />;
          title = "Wind";
          unit = "km/h";
          break;

        case "humidity":
          icon = <InvertColors sx={{ fontSize: iconSizeLg }} />;
          title = "Humidity";
          unit = "%";
          break;

        case "pressure":
          icon = <Compress sx={{ fontSize: iconSizeLg }} />;
          title = "Pressure";
          unit = "mb";
          break;

        case "sunrise":
          icon = <WbTwilight sx={{ fontSize: iconSizeLg }} />;
          title = "Sunrise";
          break;

        case "sunset":
          icon = <Nightlight sx={{ fontSize: iconSizeLg }} />;
          title = "Sunset";
          break;

        default:
          unit = "";
          icon = null;
          title = "";
          break;
      }

      let newItem = {
        id: index,
        name: item[0],
        value: item[1],
        unit: unit,
        icon: icon,
        variant: "secondary",
        title: title,
      };

      return newItem;
    });

    return tranformedData;
  };

  return (
    <>
      <div className="container">
        <div className="app">
          <Button />
          <h1 className="app__title">
            Weathere
            <span>☁️</span>
          </h1>
          <div className="app__intro">
            Today is <strong> {`${dayStr} ${month} ${dayNbr}`}</strong>
            <p>
              What's the weather in{" "}
              <strong>{`${makeFirstCapital(place)}`}</strong>?
            </p>
          </div>

          <form className="app__search">
            <p>
              <label for="placeSearch"></label>
              <input
                type="search"
                name="placeSearch"
                id="placeSearch"
                value={makeFirstCapital(inputValue)}
                onChange={handleOnInputChange}
                placeholder="for example Brno"
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
                infoItems={infoItems}
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
