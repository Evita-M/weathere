import { useState, useEffect } from "react";

export function useGet(url) {
  const initialState = {
    temperature: null,
    wind: null,
    description: null,
    forecast: [],
  };

  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    if (url !== "https://goweather.herokuapp.com/weather/") {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (isMounted) {
            setData(json);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setHasError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [url, setData, setHasError]);

  return { data, isLoading, hasError };
}
