import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_API } from "../../Config";
const LazyAllTools = React.lazy(() => "./AllTools");
const ManageProduct = () => {
  const [allTools, setAllTools] = useState([]);
  useEffect(() => {
    fetch(`${BASE_API}/tools`)
      .then((res) => res.json())
      .then((data) => setAllTools(data));
  }, []);
  const handleDelete = (id) => {
    const areYouSure = window.confirm("Are you want to Delete your Items");
    if (areYouSure) {
      const url = `${BASE_API}/deleteTools/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Delete Successfully");
            const remaining = allTools.filter((tool) => tool._id !== id);
            setAllTools(remaining);
          }
        });
    }
  };
  return (
    <section className=" bg-tools manage-tools">
      <div className="container mx-auto">
        <div className="title">
          <h4>ALL TOOLS</h4>
        </div>
        <div className="allTooles manage_tools">
          {allTools.map((tool) => (
            <React.Suspense fallback="Loading...">
              <LazyAllTools
                key={tool._id}
                tool={tool}
                handleDelete={handleDelete}
              />
            </React.Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageProduct;
