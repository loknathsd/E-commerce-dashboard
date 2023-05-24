import React from 'react';

const Product = ({pd}) => {
    const {image,title,price,category} = pd; 
    return (
        <div className='w-60 h-56 bg-white rounded border p-5 font-serif' >
            <img className='w-24 h-20 mx-[25%] mt-2' src={image} alt="" />
            <h1  className='text-xl mt-5 mb-3'>{title.slice(0,15)}..</h1>
            <div className='flex justify-around'>
                <p className='text-lg text-red-400'>${price}</p>
                <p className='text-gray-400'>{category}</p>
            </div>
        </div>
    );
};

export default Product;