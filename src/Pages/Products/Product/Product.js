import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexs/AuthProvider/AuthProvider';

const Product = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { name, _id, image,
        location, resalePrice, originalPrice,
        yearsOfUse, SellerName } = product;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Location:{location}</p>
                    <p>Orginal Price:{originalPrice}</p>
                    <p>Resale Price:{resalePrice}</p>
                    <p>Year of use:{yearsOfUse}</p>
                    <p>SellerName:{SellerName}</p>
                    <div className="card-actions justify-end">
                        <div className="bg-gradient-to-r cursor-pointer from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2">
                            <label htmlFor="my-modal-3" className='cursor-pointer'
                            >Book Now</label>

                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative text-black">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' disabled defaultValue={user?.displayName} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" name='email' disabled defaultValue={user?.email} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Meeting location</span>
                                            </label>
                                            <input type="text" name='location' placeholder="location" className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone Number</span>
                                            </label>
                                            <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <input className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2 w-full" type="submit" value="Submit" />
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