import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const Item = ({ car, setReload }) => {
    const { _id, picture, brand } = car;
    const handleDelete = async (id) => {
        const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/${id}`;
        const confirm = window.confirm("Are you sure want to delete item?");
        if (confirm) {
            const { data } = await axios.delete(url);
            if (data.success) {
                setReload(true)
            }
        }
    };

    return (
        <Col lg={4} md={6} className="my-3" data-aos="fade-up">
            <div className="item-container">
                <div className="item-img-container">
                    <img src={picture} alt="" />
                </div>
                <h5>{brand}</h5>
                <button onClick={() => handleDelete(_id)} className="delete-item">
                    <FaTrashAlt /> <span>Delete</span>
                </button>
            </div>
        </Col>
    );
};

export default Item;
