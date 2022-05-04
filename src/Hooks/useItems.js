import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
const useItems = () => {
  const [cars, setCars] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  useEffect(() => {
    const getCars = async () => {
      const url = `https://enigmatic-earth-44216.herokuapp.com/getCars?email=${email}`;
      const { data } = await axios.get(url);
      setCars(data);
    };
    getCars();
  }, [cars]);
  return { cars, setCars };
};

export default useItems;
