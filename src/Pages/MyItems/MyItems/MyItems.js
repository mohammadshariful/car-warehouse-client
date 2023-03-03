import axios from "axios";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import TitleChange from "../../Shared/TitleChangle/TitleChange";
import SingleItem from "../SingleItem/SingleItem";
import "./MyItems.css";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isReload, setReload] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        const email = user.email;
        const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/my-car?email=${email}`;
        const { data } = await axios.get(url, {
          headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        });
        setCars(data.data);
      } catch (error) {
        if (error.response.status === 403) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getItems();

  }, [user.email, navigate, isReload]);

  return (
    <Container className="my-5 " data-aos="fade-left">
      <TitleChange title="My Items" />
      <div className="items-container">
        <h2 className="text-center section-title">My added items is here</h2>
        <p className="text-center">
          Here's the element you made just allows you to see.
        </p>
        <h6 className="text-center">Total add your item({cars.length})</h6>
        <Row className="mt-3">
          {cars.map((car) => (
            <SingleItem
              key={car._id}
              car={car}
              setReload={setReload}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MyItems;
