import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Inventory = ({ car, update, setUpdate, data, setData }) => {
  const { _id, brand, picture, price, quantity } = car;

  const handleDelete = async (id) => {
    const processed = window.confirm("Are you sure want to delete?");

    if (processed) {
      const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/${id}`;
      await axios.delete(url);
      const remaing = data.filter((car) => car._id !== id);
      setData(remaing);
      setUpdate(!update);
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
