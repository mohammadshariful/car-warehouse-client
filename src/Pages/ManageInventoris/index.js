import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import addIcon from "./../../Assets/Icons/icons8-add-30.png";
import useDataLoad from "./../../Hooks/useDataLoad";
import Loading from "./../Shared/Loading/Loading";
import TitleChange from "./../Shared/TitleChangle/TitleChange";
import Inventory from "./Inventory";

import "./manage-inventoris.css";

const ManageInventoris = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/?page=${page}&&pageSize=${pageSize}`;
  const { data, setData, loading, setUpdate, update } = useDataLoad(url);

  useEffect(() => {

    fetch("https://car-rev-server-2023.onrender.com/api/v1/cars/car-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.data?.car;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);


  if (loading) {
    return <Loading />

  }


  return (
    <>
      {data.length > 0 && <Container className="my-5 ">
        <TitleChange title="Manage Items" />
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
              {data.map((car) => (
                <Inventory
                  key={car._id}
                  car={car}
                  data={data}
                  update={update}
                  setData={setData}
                  setUpdate={setUpdate}
                />
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex">
              {[...Array(pageCount).keys()].map((number, index) => (
                <button
                  key={index}
                  className={`btn mx-1 ${page === number ? "btn-primary" : "btn-outline-primary"
                    }`}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}
              <select
                className="form-select"
                defaultValue={10}
                onChange={(e) => setPageSize(e.target.value)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
      </Container>}
    </>
  );
};

export default ManageInventoris;
