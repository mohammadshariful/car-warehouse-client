import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import addIcon from "../../../Assets/Icons/icons8-add-30.png";
import Inventory from "../Inventory/Inventory";
import "./ManageInventoris.css";

const ManageInventoris = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-earth-44216.herokuapp.com/popularCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Container className="my-5 ">
      <div className="inventory-management">
        <h2 className="text-center section-title">
          Manage all your inventories
        </h2>
        <div onClick={() => navigate("/additem")} className="add-item-btn">
          <img src={addIcon} alt="" />
          <button>Add Items</button>
        </div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <Inventory
                key={car._id}
                cars={cars}
                setCars={setCars}
                car={car}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ManageInventoris;
