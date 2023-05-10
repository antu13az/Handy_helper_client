import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebaseCredential";
import useAdmin from "../../hooks/useAdmin";

const SideBar = ({ children }) => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-[#000d20] text-base-content side-ber-ds">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>

            {
              admin ? <>
                <li>
                  <NavLink to="/dashboard/users">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addProduct">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageProduct">Manage Product</NavLink>
                </li>
              </>
                :
                <>
                  <li>
                    <NavLink to="/dashboard/myOrder">My Order</NavLink>
                  </li>
                  <li>

                    <NavLink to="/dashboard/review">Review</NavLink>
                  </li>
                </>
            }

          </ul>
        </div>
      </div>
    </div >
  );
};

export default SideBar;
