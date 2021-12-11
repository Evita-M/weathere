import React from "react";
import { getDateFormatted, makeFirstCapital } from "../tools/helpers";
import { Air, Thermostat } from "@mui/icons-material";

const Card = ({ data, place }) => {
  const { temperature, wind, description, forecast } = data;
  // const { dayStr, dayNbr, month } = getDateFormatted();
  //   console.log(getDateFormatted());
  //   console.log(getDateFormatted(new Date(), 3));
  //   console.log(getDateFormatted(null, 3));
  //   console.log(getDateFormatted(new Date(2021, 10, 24), 5));
  //   console.log(getDateFormatted(new Date(2021, 10, 24)));

  return (
    <>
      <article className="card">
        <div className="card__main">
          <h2 className="card__title">{makeFirstCapital(place)}</h2>
          <p className="card__subtitle">{description}</p>
          <ul className="card__forecast">
            <li className="card__info card__info--lg">
              <span className="card__forecast-icon">
                <Thermostat sx={{ fontSize: 35 }} />
              </span>
              <span>{temperature}</span>
            </li>
            <li className="card__info card__info--lg">
              <span className="card__forecast-icon">
                <Air sx={{ fontSize: 35 }} />
              </span>
              <span>{wind}</span>
            </li>
          </ul>
        </div>

        <div className="card__list">
          {forecast.map((item, index) => {
            let df = getDateFormatted(new Date(), item.day);

            return (
              <div key={index} className="card__item">
                <div className="card__item-header">
                  <p className="card__item-day">
                    <strong>{df.dayStr}</strong>
                  </p>
                  <p>{`${df.dayNbr} of ${df.month}`}</p>
                </div>
                <div className="card__item-stats">
                  <p className="card__info">
                    <span className="card__icon">
                      <Thermostat sx={{ fontSize: 30 }} />
                    </span>
                    <span>{item.temperature}</span>
                  </p>
                  <p className="card__info">
                    <span className="card__icon">
                      <Air sx={{ fontSize: 30 }} />
                    </span>
                    <span>{item.wind}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Card;
