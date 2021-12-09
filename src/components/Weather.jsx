import React from "react";
import Card from "./Card";

const Weather = ({ data, place, hasError }) => {
  return (
    <>
      {(data && data.temperature === "") || hasError ? (
        <p>Something went wrong! Try it again.</p>
      ) : (
        data && <Card data={data} place={place} />
      )}
    </>
  );
};

export default Weather;
