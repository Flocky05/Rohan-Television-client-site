import { useQuery } from "@tanstack/react-query";
import React from "react";
import server from "../../../utils/axios-client";
import tick from "../../../images/tick/check.png";
const AllUsers = () => {
  const { data, isLoading, refetch } = useQuery(["all-user"], () =>
    server.get("users")
  );
  const handleDelete = (_id) => {
    server.delete(`user/${_id}`).then((_) => {
      refetch();
    });
  };
  const handleVerify = (_id) => {
    server
      .put(`user/${_id}`)
      .then((_) => {
        refetch();
      })
      .catch((err) => console.log(err));
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
                    <div className="">
                      <div className="font-bold flex gap-2">
                        {user.name}
                        {user.verified && (
                          <img className="w-5 h-5" src={tick} alt="" />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <th>
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() => handleVerify(user._id)}
                    disabled={user.verified}
                  >
                    Verify
                  </button>
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
