import { useState, useEffect } from "react";

export function useGet(url, defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
}
