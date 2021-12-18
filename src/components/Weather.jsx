import React from "react";
import Forecast from "./Forecast";

const Weather = ({ data, infoItems, hasError }) => {
  return (
    <>
      {(data && data.temperature === "") || hasError ? (
        <p className="error-text">
          Something went wrong!<br></br> Try it again.
        </p>
      ) : (
        data && <Forecast data={data} infoItems={infoItems} />
      )}
    </>
  );
};

export default Weather;
