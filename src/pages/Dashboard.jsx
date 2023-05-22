import React from 'react';
import {GiExpense} from 'react-icons/gi'
import {CgLoadbarSound} from 'react-icons/cg'
import {RxDashboard} from 'react-icons/rx'
import {ImUsers} from 'react-icons/im'
import { Card } from '@mui/material';
import TotalSpent from '../components/TotalSpent/TotalSpent';
import Analytic from '../components/Analytic/Analytic';



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
        <div>
            <h1 className='text-4xl font-serif text-gray-600 ml-10 mt-10'>Overview</h1>
            <div className='flex justify-center gap-5 mt-10'>
                {data.map(dt => <Card key={dt.id} dt={dt} />)}
            </div>
            <div className="flex mt-10 justify-center gap-10">
                <TotalSpent />
                <Analytic />
            </div>
        </div>
    );
};

export default Dashboard;