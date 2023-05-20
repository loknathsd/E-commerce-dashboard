import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Navbar from '../../components/Navbar/Navbar'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<DashboardLayout />} >
                    
                </Route>
            </Routes>

        </div>
    );
};

export default Routing;