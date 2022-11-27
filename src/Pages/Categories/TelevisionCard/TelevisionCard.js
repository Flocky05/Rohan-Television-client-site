import React from 'react';


const TelevisionCard = ({ television }) => {

    const { _id, image, dtail, title } = television;

    return (

        <div className="card w-96 bg-base-500 shadow-lg image-full">
            <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p>{dtail.slice(0, 50)}...</p>
                <div className="card-actions justify-end">
                    <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2 ">See all products</button>
                </div>
            </div>
        </div>

    );
};

export default TelevisionCard;