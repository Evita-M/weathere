import React from "react";
import { getDateFormatted, makeFirstCapital } from "../tools/helpers";
import Info from "./Info";
import {
  Air,
  Thermostat,
  //   InvertColors,
  //   Compress,
  //   HistoryToggleOff,
  Nightlight,
  WbTwilight,
  //   Explore,
} from "@mui/icons-material";

const Forecast = ({ data, infoItems }) => {
  return (
    <>
      <article className="forecast">
        <div className="forecast__main">
          <h2 className="forecast__title">{makeFirstCapital(data.location)}</h2>
          <h3 className="forecast__country">{data.country}</h3>
          <div className="forecast__description">
            <span>
              <img src={data.icon} alt={data.description}></img>
            </span>
            <h4 className="u-mb-0">{data.description}</h4>
          </div>
          <div className="forecast__wrapper">
            {infoItems.map((item) => {
              return (
                <Info
                  key={item.id}
                  variant={item.variant}
                  title={item.title}
                  icon={item.icon}
                  value={item.value}
                  unit={item.unit}
                />
              );
            })}
          </div>
        </div>
        <hr />
        <div className="forecast__list">
          {data.forecast.map((item, index) => {
            let df = getDateFormatted(new Date(item.date));
            let iconSize = 19;

            return (
              <div key={index} className="forecast__item">
                <div className="forecast__item-header">
                  <p className="forecast__item-day">{df.dayStr}</p>
                  <p>{`${df.month} ${df.dayNbr}`}</p>
                </div>
                <div className="forecast__description">
                  <img src={item.icon} alt={item.description}></img>
                  <h4>{item.description}</h4>
                </div>
                <Info
                  title="Min/Max Temperature"
                  icon={<Thermostat sx={{ fontSize: iconSize }} />}
                  value={`${item.minTemp} / ${item.maxTemp}`}
                  unit="°C"
                />
                <div className="forecast__container">
                  <Info
                    title="Max Wind"
                    icon={<Air sx={{ fontSize: iconSize }} />}
                    value={item.maxWind}
                    unit="kmH"
                  />
                  <Info
                    title="Sunrise"
                    icon={<WbTwilight sx={{ fontSize: iconSize }} />}
                    value={item.sunrise}
                  />
                  <Info
                    title="Sunset"
                    icon={<Nightlight sx={{ fontSize: iconSize }} />}
                    value={item.sunset}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Forecast;
