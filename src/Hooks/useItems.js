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
      const url = `http://localhost:5000/getCars?email=${email}`;
      const { data } = await axios.get(url);
      setCars(data);
    };
    getCars();
  }, [cars]);
  return { cars, setCars };
};

export default useItems;
