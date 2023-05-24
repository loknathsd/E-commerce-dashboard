import React from 'react';
import CoverLogo from '../images/user-cover-pic.png';
import Avatar from '../images/avatar.jpg'

const Cover = () => {
    return (
        <div className='bg-white'>
                <img className='' src={CoverLogo} alt="" />
                <div className='flex gap-4 mx-10 pb-5'>
                    <img className='w-28 border-4 border-white rounded-full -mt-5 ' src={Avatar} alt="" />
                    <div className='self-center'>
                        <h1 className='text-2xl font-serif text-gray-600'>Jason Alexander</h1>
                        <h4 className='text-gray-500'>Software Engineer</h4>
                    </div>
                </div>
            </div>
    );
}
export default Cover;