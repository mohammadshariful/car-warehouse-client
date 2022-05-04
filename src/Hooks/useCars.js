import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://enigmatic-earth-44216.herokuapp.com/popularCars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);
  return { cars, setCars, isLoading };
};

export default useCars;
