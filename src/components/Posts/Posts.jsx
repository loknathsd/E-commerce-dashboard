import React from 'react';
import Photo from '../../images/avatar2.jpg';
import Banner from '../../images/post-1.png';
import Post from './Post';

const data=[
    {
        id:1,
        name:'Martha Hawk',
        photo:Photo,
        banner:Banner,
        status:'Coffee and Afternoon'
    },
    {
        id:2,
        name:'Martha Hawk',
        photo:Photo,
        banner:'',
        status:'Hello, Everybody'
    }
]

const Posts = () => {
    return (
        <div className='lg:w-[60%] max-sm:mt-5 md:mt-5 lg:mt-0'>
            {
                data.map(dt=><Post key={dt.id} dt={dt} />)
            }
            
        </div>
    );
};

export default Posts;