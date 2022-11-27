import React from 'react';

const Product = ({ product }) => {
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
                        <button className="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;