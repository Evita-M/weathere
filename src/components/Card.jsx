import React from "react";
import { getDateFormatted } from "../tools/helpers";

const Card = ({ data, place }) => {
  const { temperature, wind, description, forecast } = data;
  const { dayStr, dayNbr, month } = getDateFormatted();
  //   console.log(getDateFormatted());
  //   console.log(getDateFormatted(new Date(), 3));
  //   console.log(getDateFormatted(null, 3));
  //   console.log(getDateFormatted(new Date(2021, 10, 24), 5));
  //   console.log(getDateFormatted(new Date(2021, 10, 24)));

  return (
    <>
      <article className="card">
        <div className="card__main">
          <h2 className="card__title">{place}</h2>
          <div className="card__img"></div>
          <ul className="card__forecast">
            <li className="card__forecast-item">
              <span>Temperature</span> {temperature}
            </li>
            <li className="card__forecast-item">
              <span>Wind</span>
              {wind}
            </li>
            <li className="card__forecast-item">
              <span>Description</span> {description}
            </li>
          </ul>
        </div>
        <div className="card__list">
          {forecast.map((item, index) => {
            return (
              <div key={index} className="card__item">
                <p>{item.day}</p>
                <p>{item.temperature}</p>
                <p>{item.wind}</p>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Card;
