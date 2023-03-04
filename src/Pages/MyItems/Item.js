import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Item = ({ car, setCars, ...props }) => {
    const navigate = useNavigate();
    const { _id, picture, brand, quantity, price
    } = car;

    const handleDelete = async (id) => {
        const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/${id}`;
        const confirm = window.confirm("Are you sure want to delete item?");
        if (confirm) {
            const { data } = await axios.delete(url);
            if (data.success) {
                setCars((prevItems) => prevItems.filter((item) => item._id !== id));
            }
        }
    };

    return (
        <Col lg={4} md={6} className="my-3" data-aos="fade-up">
            <div className="item-container">
                <div className="item-img-container">
                    <img src={picture} alt={brand} />
                </div>
                <h5>{brand}</h5>
                <p className="item-info"><span>quantity : {quantity}</span><span>price : {price}</span></p>
                <button onClick={() => handleDelete(_id)} className="delete-item">
                    <FaTrashAlt />
                </button>
                <button onClick={() => navigate(`/stockupdate/${_id}`)} className="my-item-update-btn">update</button>
            </div>
        </Col>
    );
};

export default Item;
