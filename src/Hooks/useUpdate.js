import { useEffect, useState } from "react";
const useUpdate = (stockId) => {
  const [car, setCar] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    const url = `https://car-rev-server.onrender.com/popularCars/${stockId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [stockId, isLoad]);
  return { car, isLoad, setIsLoad };
};

export default useUpdate;
