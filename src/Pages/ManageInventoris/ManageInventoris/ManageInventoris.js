import React from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import addIcon from "../../../Assets/Icons/icons8-add-30.png";
import useDataLoad from "../../../Hooks/useDataLoad";
import Loading from "../../Shared/Loading/Loading";
import Inventory from "../Inventory/Inventory";
import "./ManageInventoris.css";
const ManageInventoris = () => {
  const navigate = useNavigate();
  const url = "https://enigmatic-earth-44216.herokuapp.com/popularCars";
  const { data, setData, loading, setUpdate, update } = useDataLoad(url);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          </div>
        </Container>
      )}
    </>
  );
};

export default ManageInventoris;
