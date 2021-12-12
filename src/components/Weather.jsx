import React from "react";
import Forecast from "./Forecast";

const Weather = ({ data, place, hasError }) => {
  return (
    <>
      {(data && data.temperature === "") || hasError ? (
        <p>
          Something went wrong!<br></br> Try it again.
        </p>
      ) : (
        data && <Forecast data={data} place={place} />
      )}
    </>
  );
};

export default Weather;
