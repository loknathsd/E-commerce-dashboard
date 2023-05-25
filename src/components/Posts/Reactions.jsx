import React from 'react';
import {MdFavorite,MdModeComment} from 'react-icons/md';
import {TbShare3} from 'react-icons/tb';

const data=[
    {id: 1,icon:<MdFavorite/>,count:20 },
    {id: 2,icon:<MdModeComment/>,count:20 },
    {id: 3,icon:<TbShare3/>,count:20 }
]
const Reactions = () => {
    return (
        <div className='flex justify-between'>
            {
                data.map(dt=><div key={dt.id} className="flex gap-2 my-5 font-bold text-sm text-gray-500" >
                     <p className='self-center text-lg'>{dt.icon}</p>   
                     <p>{dt.count}</p>   
                </div> )
            }
        </div>
    );
};

export default Reactions;