import React from 'react';
import {GiExpense} from 'react-icons/gi'
import {CgLoadbarSound} from 'react-icons/cg'
import {RxDashboard} from 'react-icons/rx'
import {ImUsers} from 'react-icons/im'
import TotalSpent from '../components/TotalSpent/TotalSpent';
import Analytic from '../components/Analytic/Analytic';
import Card from '../components/Card/Card';
import RecentOrders from '../components/RecentOrders';
import TopSell from '../components/TopSell';

const data = [
    {   id:1,
        title: 'All Spending',
        icon: <GiExpense />,
        price: "$574"
    },
    {   id:2,
        title: 'Earnings',
        icon: <CgLoadbarSound />,
        price:'$521'
    },
    {   id:3,
        title: 'Weekly Revenue',
        icon: <RxDashboard />,
        price: "$854"
    },
    {   id:4,
        title: 'Customers',
        icon: <ImUsers />,
        price: '39354'
    },

]

const Dashboard = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl font-serif text-gray-600 mt-5'>Overview</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  mx-auto gap-6 mt-5'>
                {data.map(dat => <Card key={dat.id} dat={dat} />)}
            </div>
            <div className="lg:flex mt-10 justify-center gap-10">
                <TotalSpent />
                <Analytic />
            </div>
            <div className='lg:flex justify-center my-10 gap-10'>
                <RecentOrders />
                <TopSell />
            </div>
        </div>
    );
};

export default Dashboard;