import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<DashboardLayout />} >
                    <Route path='/' element={<Navigate replace to="dashboard" ></Navigate>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    
                </Route>
            </Routes>

        </div>
    );
};

export default Routing;