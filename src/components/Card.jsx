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
      {place === "" ? (
        ""
      ) : (
        <div>
          <p>{dayStr}</p>
          <p>{`${dayNbr}  ${month}`}</p>
          <article className="card">
            <h2>{place}</h2>
            <p>Temprature: {temperature}</p>
            <p>Wind: {wind}</p>
            <p>Description: {description}</p>
          </article>
          <div>
            <ul className="cards__list">
              {forecast.map((item, index) => {
                return (
                  <li key={index} className="cards__item">
                    <article className="card">
                      <p>{item.day}</p>
                      <p>{item.temperature}</p>
                      <p>{item.wind}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
