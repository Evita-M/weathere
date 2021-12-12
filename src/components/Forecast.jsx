import React from "react";
import { getDateFormatted, makeFirstCapital } from "../tools/helpers";
import InfoItem from "./InfoItem";
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

const Forecast = ({ data, place }) => {
  // const { dayStr, dayNbr, month } = getDateFormatted();
  //   console.log(getDateFormatted());
  //   console.log(getDateFormatted(new Date(), 3));
  //   console.log(getDateFormatted(null, 3));
  //   console.log(getDateFormatted(new Date(2021, 10, 24), 5));
  //   console.log(getDateFormatted(new Date(2021, 10, 24)));

  return (
    <>
      <article className="forecast">
        <div className="forecast__main">
          <h2 className="forecast__title">{makeFirstCapital(data.location)}</h2>
          <h3 className="forecast__country">{data.country}</h3>
          <div className="forecast__description">
            <img src={data.icon} alt={data.description}></img>
            <h4>{data.description}</h4>
          </div>
          <div className="forecast__wrapper">
            <InfoItem
              title="Local Time"
              icon={<HistoryToggleOff sx={{ fontSize: 22 }} />}
              value={data.localTime}
            />
            <InfoItem
              title="Wind"
              icon={<Explore sx={{ fontSize: 22 }} />}
              value={data.windDirection}
            />
            <InfoItem
              title="Wind Direction"
              icon={<Air sx={{ fontSize: 22 }} />}
              value={data.wind}
              unit="kmH"
            />
            <InfoItem
              title="Temperature"
              icon={<Thermostat sx={{ fontSize: 22 }} />}
              value={data.temperature}
              unit="°C"
            />
            <InfoItem
              title="Feels like"
              icon={<Thermostat sx={{ fontSize: 22 }} />}
              value={data.feelsLike}
              unit="°C"
            />
            <InfoItem
              title="Humidity"
              icon={<InvertColors sx={{ fontSize: 22 }} />}
              value={data.humidity}
              unit="%"
            />
            <InfoItem
              title="Pressure"
              icon={<Compress sx={{ fontSize: 22 }} />}
              value={data.pressure}
              unit="mb"
            />
            <InfoItem
              title="Sunset"
              icon={<Nightlight sx={{ fontSize: 22 }} />}
              value={data.sunset}
            />
            <InfoItem
              title="Sunrise"
              icon={<WbTwilight sx={{ fontSize: 22 }} />}
              value={data.sunrise}
            />
          </div>
        </div>

        <div className="card__list">
          {/* {forecast.map((item, index) => {
            let df = getDateFormatted(new Date(), item.day);

            return (
              <div key={index} className="card__item">
                <div className="card__item-header">
                  <p className="card__item-day">{df.dayStr}</p>
                  <p>{`${df.dayNbr} of ${df.month}`}</p>
                </div>
                <div className="card__forecast">
                  <p className="card__info">
                    <span className="card__icon">
                      <Thermostat sx={{ fontSize: 18 }} />
                    </span>
                    <span>{item.temperature}</span>
                  </p>
                  <p className="card__info">
                    <span className="card__icon">
                      <Air sx={{ fontSize: 18 }} />
                    </span>
                    <span>{item.wind}</span>
                  </p>
                </div>
              </div>
            );
          })} */}
        </div>
      </article>
    </>
  );
};

export default Forecast;
