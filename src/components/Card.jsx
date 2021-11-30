import React from "react";
import { getDateFormatted } from "../tools/helpers";

const Card = ({ data }) => {
  const { temperature, wind, description, forecast } = data;
  const { dayStr, dayNbr, month } = getDateFormatted();
  console.log(getDateFormatted());
  console.log(getDateFormatted(new Date(), 3));
  console.log(getDateFormatted(null, 3));
  console.log(getDateFormatted(new Date(2021, 10, 24), 5));
  console.log(getDateFormatted(new Date(2021, 10, 24)));

  return (
    <div>
      <p>{dayStr}</p>
      <p>{`${dayNbr}  ${month}`}</p>
      <p>{temperature}</p>
      <p>{wind}</p>
      <p>{description}</p>
      <div>
        {forecast.map((item) => {
          return (
            <>
              <p>{item.day}</p>
              <p>{item.temperature}</p>
              <p>{item.wind}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
