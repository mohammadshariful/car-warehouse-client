import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import useItems from "../../../Hooks/useItems";
import "./SingleItem.css";
const SingleItem = ({ car }) => {
  const { cars, setCars } = useItems();
  const { _id, pictureUrl, brand } = car;
  const handleDelete = async (id) => {
    const url = `http://localhost:5000/getCars/${id}`;
    const confirm = window.confirm("Are you sure want to delete item?");
    if (confirm) {
      const { data } = await axios.delete(url);
      if (data.deletedCount > 0) {
        const remaing = cars.filter((car) => car._id !== id);
        setCars(remaing);
      }
    }
  };

  return (
    <Col lg={4} md={6} className="my-3" data-aos="fade-up">
      <div className="item-container">
        <div className="item-img-container">
          <img src={pictureUrl} alt="" />
        </div>
        <h5>{brand}</h5>
        <button onClick={() => handleDelete(_id)} className="delete-item">
          <FaTrashAlt /> <span>Delete</span>
        </button>
      </div>
    </Col>
  );
};

export default SingleItem;
