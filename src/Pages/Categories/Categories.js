import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useChangeTitle from '../../hooks/changeTitle.jsx';
import TelevisionCard from './TelevisionCard/TelevisionCard.js';
import { BeatLoader } from 'react-spinners';

const Categories = () => {
    const [televisions, setTelevision] = useState([]);
    useChangeTitle('Home');
    useEffect(() => {
        fetch(`http://localhost:5000/televisions`)
            .then(res => res.json())
            .then(data => setTelevision(data));
    })
    return (
        <div>
            <div className='mt-8'>
                <h2 className='text-4xl font-bold text-center p-6'>All categories Here</h2>
                {
                    televisions?.length ? <div className='grid grid-cols-1 lg:grid-cols-3 w-max mx-auto md:grid-cols-2 p-4 gap-8'>
                        {
                            televisions?.map(television => <TelevisionCard
                                key={television._id}
                                television={television}
                            >
                            </TelevisionCard>)
                        }
                    </div> : <div className='flex justify-center mt-[10%]'><BeatLoader color="#36d7b7" /></div>
                }
            </div>
            <div className='flex justify-end mx-28 py-3'>
                <button>
                    <Link
                        to="/television"
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg ">
                        See more
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Categories;