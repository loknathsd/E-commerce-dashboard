import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-gray-600 font-serif ml-10 mt-5'>Products</h1>
            {products.length ===0 && <Loader /> }
            <div className='grid grid-cols-4 justify-items-center p-5 gap-6'>
                {products.map(pd => <Product key={pd.id} pd={pd} />)}
            </div>
        </div>

    );
}
export default Products;