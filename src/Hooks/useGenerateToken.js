import axios from "axios";
import { useEffect, useState } from "react";

const useGenerateToken = (credential) => {

    const [token, setToken] = useState('');
    const currentUser = credential?.user?.email;

    useEffect(() => {
        const getToken = async () => {
            try {
                if (currentUser) {
                    const { data } = await axios.put("https://car-rev-server-2023.onrender.com/api/v1/login", { currentUser });
                    setToken(data.accessToken);
                    localStorage.setItem("accessToken", data.accessToken);
                }

            } catch (error) {
                console.log(error);
            }
        }

        getToken()
    }, [currentUser])

    return { token }

};

export default useGenerateToken;