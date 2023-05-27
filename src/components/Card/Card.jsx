import React from 'react';

const Card = ({dat}) => {
    return (
        <div className='bg-white h-[126px] font-serif border border-gray-200 rounded flex justify-center gap-4 align-middle items-center'>
            <span className='text-3xl text-gray-500  p-3 rounded-full  bg-blue-100 '>{dat.icon}</span>
            <div>
                <p className='text-gray-400 text-md'>{dat.title}</p>
                <p>{dat.price}</p>
            </div>
        </div>
    );
};

export default Card;