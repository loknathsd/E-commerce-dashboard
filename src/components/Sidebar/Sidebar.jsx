import{ React,useState} from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaRegUser, FaUserPlus } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { CgUserList } from 'react-icons/cg';
import { FiLogIn } from 'react-icons/fi';
import { MdAppRegistration } from 'react-icons/md';
import ScrollBar from "simplebar-react";
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


const index = [
    {
        title: "Dashboard",
        Icon: <MdOutlineDashboard />,
        path: "/dashboard",
    },
    {
        title: "User Profile",
        Icon: <FaRegUser />,
        path: "/dashboard/user-profile",
    },
    {
        title: "User Grid",
        Icon: <RxDashboard />,
        path: "/dashboard/user-grid",
    },
    {
        title: "User List",
        Icon: <CgUserList />,
        path: "/dashboard/user-list",
    },
    {
        title: "Add user",
        Icon: <FaUserPlus />,
        path: "/dashboard/add-user",
    },
    {
        title: "Login",
        Icon: <FiLogIn />,
        path: "/login",
    },
    {
        title: "Register",
        Icon: <MdAppRegistration />,
        path: "/Register",
    },
];

const Sidebar = () => {
    const [active,setActive] = useState("Dashboard");

    const handleActiveButton = (menu)=>{
        console.log(menu.title);
        setActive(menu.title)
    }
    return (
        <div className='w-20 shadow-2xl h-[100vh] px-7 pt-10'>
            <ScrollBar style={{ maxHeight: "calc(100% - 50px)" }}>
                {index.map((nav, index) =>
                    <div key={index} className='mt-5'>
                        <Tooltip title={nav.title} placement="right" key={index} >
                            <Link to={nav.path}><button onClick={()=>handleActiveButton(nav)} className={`mb-[1rem] text-2xl ${active === nav.title ? 'text-blue-500' : 'text-gray-500'}`}>{nav.Icon}</button></Link>
                        </Tooltip>
                    </div>
                )}
            </ScrollBar>
        </div>
    );
};

export default Sidebar;