import { useEffect, useState } from "react";

const useDataLoad = (url) => {
  const [loadData, setLoadData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLoadData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.dir(error.message);
      });
  }, [update, url]);
  return { loadData, setUpdate, setLoadData, isLoading };
};

export default useDataLoad;
