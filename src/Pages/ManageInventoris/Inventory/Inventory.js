import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Inventory.css";
const Inventory = ({ car }) => {
  const { picture, brand, quantity, price } = car;
  return (
    <tr className="inventory-container" data-aos="fade-right">
      <td>
        <img src={picture} alt="" />
      </td>
      <td>{brand}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <div className="delete-inventory">
          <FaTrashAlt />
          <button>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default Inventory;
