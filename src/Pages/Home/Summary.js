import { BiHappyAlt } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
const Summary = () => {
  return (
    <section id="summeryId" className="summerySection">
      <div className="text-center pt-8 pb-14">
        <h4 className="title ">Business Summery</h4>
        <p>here is our anual reviniue</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>

        <div className="summeryContainer">
          <div className="summery-card">
            <div className="summeryInfo">
              <BiHappyAlt className="text-cyan-500" />

              <div>
                <h2>3</h2>
                <span>M+</span>
              </div>
              <h2>Happy Customers</h2>
            </div>
            <div className="summeryInfo">
              <FaUsers className="text-indigo-700" />
              <div>
                <h2>200</h2>
                <span>+</span>
              </div>
              <h2>Company Work With Us</h2>
            </div>
            <div className="summeryInfo">
              <div>
                <BsTools className="text-rose-600" />
              </div>
                <h2>5</h2>
                <span>K+</span>

              <h2>Products</h2>
            </div>
            <div className="summeryInfo">
              <div>
                <GrMoney className="text-fuchsia-900" />
                <h2>50</h2>
                <span>M+</span>
              </div>

              <h2>Yearly Revinue</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
