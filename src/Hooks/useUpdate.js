import { useEffect, useState } from "react";
const useUpdate = (stockId) => {
  const [car, setCar] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const url = `https://car-rev-server.onrender.com/popularCars/${stockId}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setCar(data));
  // }, [stockId, isLoad]);

  useEffect(() => {
    setIsLoading(true)
    const updateCar = async () => {
      try {
        const res = await fetch(`https://car-rev-server-2023.onrender.com/api/v1/cars/${stockId}`);
        const { data } = await res.json();
        setCar(data);
        setIsLoading(false);
        setError(null)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }

    }
    updateCar();

  }, [stockId, isLoad])

  return { car, isLoad, setIsLoad, isLoading, error };
};

export default useUpdate;
