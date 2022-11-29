import { useQuery } from "@tanstack/react-query";
import React from "react";
import server from "../../../utils/axios-client";

const MyOrders = () => {
  const { data, isLoading } = useQuery(["my-orders"], () =>
    server.get("order")
  );
  const orders = data?.data;
  console.log(orders);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Seller Name</th>
            <th>Reseel Price</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.SellerName}</div>
                  </div>
                </div>
              </td>
              <td>{order.resalePrice}</td>
              <td>{order.location}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
