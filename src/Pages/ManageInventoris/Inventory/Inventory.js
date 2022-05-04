import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Inventory.css";
const Inventory = ({ cars, setCars, car }) => {
  const { _id, picture, brand, quantity, price } = car;
  const handleDelete = async (id) => {
    const url = `https://enigmatic-earth-44216.herokuapp.com/popularCars/${id}`;
    const processed = window.confirm("Are You sure want to delete ?");
    if (processed) {
      await axios.delete(url);
      const remainig = cars.filter((car) => car._id !== id);
      setCars(remainig);
    }
  };

  return (
    <tr className="inventory-container" data-aos="fade-right">
      <td>
        <img src={picture} alt="" />
      </td>
      <td>{brand}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <div onClick={() => handleDelete(_id)} className="delete-inventory">
          <FaTrashAlt />
          <button>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default Inventory;
