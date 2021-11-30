import React from "react";
import { useGet } from "../hooks/useGet";
import Card from "./Card";

const Weather = ({ place }) => {
  const { data, isLoading } = useGet(
    `https://goweather.herokuapp.com/weather/${place}`
  );

  return <>{isLoading ? <h1>Loading...</h1> : <Card data={data} />}</>;
};

export default Weather;
