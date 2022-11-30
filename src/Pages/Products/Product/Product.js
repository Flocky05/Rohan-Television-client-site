import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexs/AuthProvider/AuthProvider";
import server from "../../../utils/axios-client";

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const {
    name,
    _id,
    image,
    location,
    resale_price,
    original_price,
    use_years,
    seller_name,
  } = product;
  console.log(product);
  const onSubmit = (data) => {
    console.log(data);
    toast
      .promise(
        server.post("order", {
          television_id: _id,
          resale_price,
          image,
          original_price,
          location: data.location,
          seller_name,
          buyerEmail: user?.email,
          buyerName: user?.displayName,
        }),
        { error: "Something wrong", success: "done", loading: "wait" }
      )
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-96" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Location:{location}</p>
          <p>Orginal Price:{resale_price}</p>
          <p>Resale Price:{original_price}</p>
          <p>Year of use:{use_years}</p>
          <p>seller_name:{seller_name}</p>

          <div className="card-actions justify-end">
            <div className="">
              <label
                htmlFor="my-modal-3"
                className="bg-gradient-to-r cursor-pointer from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2"
              >
                Book Now
              </label>

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative text-black">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        disabled
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={user?.email}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Meeting location</span>
                      </label>
                      <input
                        type="text"
                        {...register("location")}
                        placeholder="location"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2 w-full"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
