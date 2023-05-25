import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import AddCustomer from '../../pages/AddCustomer';
import AddProduct from '../../pages/AddProduct';
import Customers from '../../pages/Customers';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Orders from '../../pages/Orders';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';
import Register from '../../pages/Register';

const Routing = () => {
    return (
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<DashboardLayout />} >
                    <Route path='/' element={<Navigate replace to="dashboard" ></Navigate>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="orders" element={<Orders /> }/>
                    <Route path='customers' element={<Customers/>}/>
                    <Route path='add-customer' element={<AddCustomer/>}/>
                    <Route path='products' element={<Products/>}/>
                    <Route path='add-product' element={<AddProduct />}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
            </Routes>
    );
};

export default Routing;