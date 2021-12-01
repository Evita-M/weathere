import React from "react";
import { useGet } from "../hooks/useGet";
import Card from "./Card";
import Spinner from "./Spinner";

const Weather = ({ place }) => {
  const { data, isLoading } = useGet(
    `https://goweather.herokuapp.com/weather/${place}`
  );

  return <>{isLoading ? <Spinner /> : <Card data={data} />}</>;
};

export default Weather;
