import { useEffect, useState } from "react";

const useDataLoad = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, [url, update]);

  useEffect(() => {

    const dataLoad = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        setData(data);
        setLoading(false);
        setError(null)

      } catch (error) {
        setError(error)
        setLoading(false);
      }
    }

    dataLoad()

  }, [url, update])

  return { data, setData, loading, error, update, setUpdate };
};

export default useDataLoad;
