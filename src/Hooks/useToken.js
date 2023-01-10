import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useToken = () => {
  const [token, setToken] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      if (email) {
        const { data } = await axios.post(
          " https://enigmatic-earth-44216.herokuapp.com/login",
          {
            email,
          }
        );
        setToken(data);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user?.email]);
  return [token];
};

export default useToken;
