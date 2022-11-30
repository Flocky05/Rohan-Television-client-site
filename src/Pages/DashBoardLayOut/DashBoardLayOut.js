import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexs/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {user?.role === "buyer" && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}

            {user?.role === "admin" && (
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
            )}
            {user?.role === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add a product</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-product">My products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
