import React from 'react';
import { SlUserFollowing } from 'react-icons/sl'
import { MdLocationOn,MdEmail,MdWork } from 'react-icons/md';
import { FaBookReader,FaPhoneAlt } from 'react-icons/fa';

const info = [
    {
        id:1,
        icon:<MdLocationOn/>,
        title:'Lives at Kuwait'
    },
    {
        id:2,
        icon:<MdEmail/>,
        title:'example@gmail.com'
    },
    {
        id:3,
        icon:<FaPhoneAlt/>,
        title:'+945256236345'
    },
    {
        id:4,
        icon:<MdWork/>,
        title:'Manager at UI_LIB'
    },
    {
        id:5,
        icon:<FaBookReader/>,
        title:'Studied at Corwin - Blick'
    }

]

const About = () => {
    return (
        <div className='bg-white w-[40%] h-[100vh] p-5 divide-y divide-slate-200 font-[Montserrat] font-medium'>
            <div className='flex justify-center gap-14 py-5 font-serif'>
                <div className="flex gap-3">
                    <p className='text-3xl bg-blue-500 p-3 rounded text-white self-center '><SlUserFollowing /> </p>
                    <div>
                        <p className='text-gray-500'>Following</p>
                        <p>93675</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <p className='text-3xl bg-[#FF9777] p-3 rounded text-white self-center '><SlUserFollowing /> </p>
                    <div>
                        <p className='text-gray-500'>Follower</p>
                        <p>85762</p>
                    </div>
                </div>
            </div>
            <div className='p-5 text-gray-600'>
                <p className='text-xl font-semibold my-5'>About</p>
                <p className='text-sm'>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</p>
               {
                info.map(inf=> <div key={inf.id} className="flex my-6 gap-2">
                   <p className='self-center text-xl '>{inf.icon}</p>
                    <p>{inf.title}</p>
                </div>)
               }
                
            </div>

        </div>
    );
};

export default About;