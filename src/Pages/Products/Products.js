import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const products = useLoaderData([]);
    return (
        <div className='p-3 space-y-3'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}>

                </Product>)
            }
        </div>
    );
};

export default Products;