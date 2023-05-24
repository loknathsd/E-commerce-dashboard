import React from 'react';
import About from '../components/About';
import Cover from '../components/Cover';

const Profile = () => {
    return (
        <div className='w-[90%] mx-auto'>
           <Cover/>
           <div className="mt-10">
            <About/>
           </div>
        </div>
    );
};

export default Profile;