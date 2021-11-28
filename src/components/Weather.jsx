import React from "react";
import { useGet } from "../hooks/useGet";

const Weather = ({ place }) => {
  const { data, isLoading } = useGet(
    `https://goweather.herokuapp.com/weather/${place}`
  );

  return <>{isLoading ? <h1>Loading...</h1> : <p>{data.temperature}</p>}</>;
};

export default Weather;
