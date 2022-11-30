import { useQuery } from "@tanstack/react-query";
import React from "react";
import server from "../../../utils/axios-client";

const AllUsers = () => {
  const { data, isLoading, refetch } = useQuery(["all-user"], () =>
    server.get("users")
  );
  const handleDelete = (_id) => {
    server.delete(`user/${_id}`).then((_) => {
      refetch();
    });
  };
  if (!isLoading)
    return (
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((user) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <th>
                  <button className="btn btn-success btn-xs">Verify</button>
                </th>
                <th>
                  <button
                    className="btn btn-error btn-xs "
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;
