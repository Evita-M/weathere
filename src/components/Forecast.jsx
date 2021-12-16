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
  let iconSize = 22;

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
              variant="secondary"
              title="Local Time"
              icon={<HistoryToggleOff sx={{ fontSize: iconSize }} />}
              value={data.localTime}
            />
            <InfoItem
              variant="secondary"
              title="Wind Direction"
              icon={<Explore sx={{ fontSize: iconSize }} />}
              value={data.windDirection}
            />
            <InfoItem
              variant="secondary"
              title="Wind"
              icon={<Air sx={{ fontSize: iconSize }} />}
              value={data.wind}
              unit="kmH"
            />
            <InfoItem
              variant="secondary"
              title="Temperature"
              icon={<Thermostat sx={{ fontSize: iconSize }} />}
              value={data.temperature}
              unit="°C"
            />
            <InfoItem
              variant="secondary"
              title="Feels like"
              icon={<Thermostat sx={{ fontSize: iconSize }} />}
              value={data.feelsLike}
              unit="°C"
            />
            <InfoItem
              variant="secondary"
              title="Humidity"
              icon={<InvertColors sx={{ fontSize: iconSize }} />}
              value={data.humidity}
              unit="%"
            />
            <InfoItem
              variant="secondary"
              title="Pressure"
              icon={<Compress sx={{ fontSize: iconSize }} />}
              value={data.pressure}
              unit="mb"
            />
            <InfoItem
              variant="secondary"
              title="Sunrise"
              icon={<WbTwilight sx={{ fontSize: iconSize }} />}
              value={data.sunrise}
            />
            <InfoItem
              variant="secondary"
              title="Sunset"
              icon={<Nightlight sx={{ fontSize: iconSize }} />}
              value={data.sunset}
            />
          </div>
        </div>
        <hr />
        <div className="forecast__list">
          {data.forecast.map((item, index) => {
            let df = getDateFormatted(new Date(item.date));
            let iconSize = 18;

            return (
              <div key={index} className="forecast__item">
                <div className="forecast__item-header">
                  <p className="forecast__item-day">{df.dayStr}</p>
                  <p>{`${df.dayNbr} of ${df.month}`}</p>
                </div>
                <div className="forecast__description">
                  <img src={item.icon} alt={item.description}></img>
                  <h4>{item.description}</h4>
                </div>
                <InfoItem
                  title="Max Wind"
                  icon={<Air sx={{ fontSize: iconSize }} />}
                  value={item.maxWind}
                  unit="kmH"
                />
                <div className="forecast__container">
                  <InfoItem
                    title="Min/Max Temperature"
                    icon={<Thermostat sx={{ fontSize: iconSize }} />}
                    value={`${item.minTemp} / ${item.maxTemp}`}
                    unit="°C"
                  />
                  {/* <InfoItem
                    title="Max Temperature"
                    icon={<Thermostat sx={{ fontSize: iconSize }} />}
                    value={item.maxTemp}
                    unit="°C"
                  /> */}
                  <InfoItem
                    title="Sunrise"
                    icon={<WbTwilight sx={{ fontSize: iconSize }} />}
                    value={item.sunrise}
                  />
                  <InfoItem
                    title="Sunset"
                    icon={<Nightlight sx={{ fontSize: iconSize }} />}
                    value={item.sunset}
                  />
                </div>
                {/* <div className="card__forecast">
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
                </div> */}
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Forecast;
