import { useNavigate } from "react-router-dom";

const ShowAllProducts = ({ tool }) => {
  const { _id, name, img, dis, price, minOrder, available } = tool;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <>
      <div className="tools-card">
        <div className="tools-containers">
          <div className="card-img">
            <img src={img} alt="" />
            <h2>{name}</h2>
          </div>
          <div className="card-info">
            <p className="price">Price: ${price}</p>
            <div className="order-able">
              <p>Min Order: {minOrder}</p>
              <p>Available: {available}</p>
            </div>
            <p className="dis">Description:{dis.slice(0, 70) + "..."}</p>
            <div className="mx-auto order-btn">
              <button onClick={() => handlePurchase(_id)} className="care-btn">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAllProducts;
