import { useEffect, useState } from "react";
const useUpdate = (stockId) => {
  const [car, setCar] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    const url = `https://enigmatic-earth-44216.herokuapp.com/popularCars/${stockId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [stockId, isLoad]);
  return { car, isLoad, setIsLoad };
};

export default useUpdate;
