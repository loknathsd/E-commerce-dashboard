import React, { useState } from 'react';
import { MdOutlineDashboard, MdAddShoppingCart } from 'react-icons/md';
import { BsMinecartLoaded, BsPersonFillAdd, BsFillCartCheckFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const index = [
    {
        title: "Dashboard",
        Icon: <MdOutlineDashboard />,
        path: "dashboard",
    },
    {
        title: "Products",
        Icon: <BsMinecartLoaded />,
        path: "products",
    },
    {
        title: "Add Product",
        Icon: <MdAddShoppingCart />,
        path: "add-product",
    },
    {
        title: "Customers",
        Icon: <FaUsers />,
        path: "customers",
    },
    {
        title: "Add Customer",
        Icon: <BsPersonFillAdd />,
        path: "add-customer",
    },
    {
        title: "Orders",
        Icon: <BsFillCartCheckFill />,
        path: "orders",
    },
    {
        title: "Profile",
        Icon: <CgProfile />,
        path: "profile",
    },

];

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const [show, setShow] = useState(false);

    const handleActiveButton = (menu) => {
        setActive(menu.title);
    }
  
    return (
        <div >
            <div style={{position:'sticky', top:0 }} className={`${show ? 'w-20' : 'w-56'} border border-r-red-200 h-[100vh] px-7 pt-16`}>
                <div className='text-right text-2xl text-blue-400'>
                    {!show && <button onClick={()=>setShow(true)} ><BsFillArrowLeftSquareFill /></button>}
                    {show && <button onClick={()=>setShow(false)}><BsFillArrowRightSquareFill /></button>}
                </div>
                <div style={{ maxHeight: "calc(100% - 50px)" }}>
                    {index.map((nav, index) =>
                        <div key={index} >
                            <Link to={nav.path} onClick={() => handleActiveButton(nav)}  className={`font-serif flex mb-[1rem] mt-8 text-lg gap-4 cursor-pointer ${active === nav.title ? 'text-blue-500' : 'text-gray-500'}`}>
                                <button className='text-xl'>{nav.Icon}</button>
                                {!show && <p>{nav.title}</p>}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;