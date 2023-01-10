import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import TitleChange from "../../Shared/TitleChangle/TitleChange";
import SingleItem from "../SingleItem/SingleItem";
import "./MyItems.css";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [cars, setCars] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://car-rev-server.onrender.com/getCars?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setCars(data);
    };
    getItems();
  }, [isTrue]);

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
              cars={cars}
              setCars={setCars}
              isTrue={isTrue}
              setIsTrue={setIsTrue}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MyItems;
