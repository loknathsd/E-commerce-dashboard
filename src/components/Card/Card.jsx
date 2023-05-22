import React from 'react';

const Card = ({dt}) => {
    return (
        <div className='bg-white w-[22%] h-[126px] font-serif border border-gray-200 rounded flex justify-center gap-4 align-middle items-center'>
            <p className='text-3xl text-gray-500  p-3 rounded-full  bg-blue-100 '>{dt.icon}</p>
            <div>
                <p className='text-gray-400 text-md '>{dt.title}</p>
                <p>{dt.price}</p>
            </div>
            
        </div>
    );
};

export default Card;