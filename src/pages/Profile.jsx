import React from 'react';
import About from '../components/About';
import Cover from '../components/Cover';
import Posts from '../components/Posts/Posts';

const Profile = () => {
    return (
        <div className='w-[90%] mx-auto'>
           <Cover/>
           <div className="mt-10 flex gap-8">
            <About/>
            <Posts/>
           </div>
        </div>
    );
};

export default Profile;