import React from 'react';
import Reactions from './Reactions';
import {MdSend} from 'react-icons/md'

const Post = ({dt}) => {
    const {name,photo,banner,status} = dt;
    return (
        <div className='bg-white p-5 mb-10 font-[Montserrat]'>
            <div className="flex gap-2 mb-5">
                <img className='w-12 rounded-full ' src={photo} alt="" />
                <div className='text-xs self-center'>
                    <h1 className='text-sm'>{name}</h1>
                    <p className='text-gray-500'>22 June 2020</p>
                </div>
            </div>
            <div>
                <h1 className='mb-4 font-bold text-lg'>{status}</h1>
                <img src={banner} alt="" />
            </div>
            <Reactions/>
            <div className='flex gap-2 my-5'>
                <img className='w-12 rounded-full ' src={photo} alt="" />
                <input className='self-center px-5 w-full bg-gray-200 h-10 py-1 rounded-md ' placeholder='Write a comment' type="text" />
                <span className='self-center text-gray-300 text-4xl'><MdSend /> </span>
            </div>
        </div>
    );
};

export default Post;