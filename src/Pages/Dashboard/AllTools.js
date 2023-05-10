import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import React from "react";
import { useNavigate } from "react-router-dom";
const AllTools = ({ tool, handleDelete }) => {
  const { _id, name, img, dis, price, minOrder, available } = tool;
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/dashboard/addProduct");
  };
  return (
    <>
      <div className="tools-card">
        <div className="card-img">
          <img
            data-original-height="200"
            width="450"
            data-original-width="450"
            height="200"
            data-src={img}
            alt=""
            class="lazyload"
          />
        </div>
        <div className="card-info">
          <h2>{name}</h2>
          <div className="order-able">
            <p>Min Order: {minOrder}</p>
            <p>Available: {available}</p>
          </div>
          <p className="price">Price: ${price}</p>
          <p className="dis">Description:{dis.slice(0, 70) + "..."}</p>
          <div className="flex gap-8">
            <button onClick={() => handleDelete(_id)} className="care-btn">
              Delete
            </button>

            <button onClick={handleAdd} className="care-btn">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTools;
