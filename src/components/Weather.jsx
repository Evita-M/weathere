import React from "react";
import Card from "./Card";

const Weather = ({ data, place }) => {
  return (
    <>
      <Card data={data} place={place} />
    </>
  );
};

export default Weather;
