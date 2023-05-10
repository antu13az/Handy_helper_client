import { useEffect, useState } from "react";
import { BASE_API } from "../../Config";

import ShowTools from "./ShowTools";
const Tooles = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API}/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <>
      <section className=" bg-tools">
        <div className="container mx-auto">
          <div className="text-center pt-8 pb-14">
            <h4 className="title ">New Arival</h4>
            <p>some of our new product you can check out</p>
            <p className="underspan">
              <span className="bg-cyan-800"></span>
              <span className="bg-purple-600"></span>
              <span className="bg-cyan-800"></span>
            </p>
          </div>
          <div className="allTooles">
            {tools.slice(0, 6).map((tool,index) => (
              <ShowTools key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tooles;
