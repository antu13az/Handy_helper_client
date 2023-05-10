import React, { useEffect, useState } from "react";
import { BASE_API } from "../../Config";

import Header from "./Header";
import Navber from "./Navber";
const LazyShowAllProducts = React.lazy(() => import("./ShowAllProducts"));
const AllProducts = () => {
  const [allTools, setAllTools] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API}/tools`)
      .then((res) => res.json())
      .then((data) => setAllTools(data));
  }, []);

  return (
    <>
      <Navber background="#021718e0" color="white"/>
      <section className=" bg-tools">
        <div className="container mx-auto">
          <div className="title mb-5">
            <h4>ALL TOOLS</h4>
          </div>
          <div className="allTooles">
            {allTools.map((tool) => (
              <React.Suspense fallback="Loading...">
                <LazyShowAllProducts key={tool._id} tool={tool} />
              </React.Suspense>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
