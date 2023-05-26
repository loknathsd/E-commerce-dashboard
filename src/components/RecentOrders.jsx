import React from 'react';
import P1 from '../images/products/shoe-1.png';
import P2 from '../images/products/bonsai.png';
import P3 from '../images/products/airbud.png';
import P4 from '../images/products/shoe-2.png';

const orderList = [
    {
        orderNo: "#JY7685",
        name: "Nike Air max 170",
        image: P1,
        price: 654,
        totalOrder: 325,
        totalAmount: "$1,45,660",
    },
    {
        orderNo: "#JY7686",
        name: "Cactus Plant",
        image: P2,
        price: 654,
        totalOrder: 40,
        totalAmount: "$1,45,420",
    },
    {
        orderNo: "#JY7687",
        name: "Minimal Pot",
        image: P3,
        price: 654,
        totalOrder: 57,
        totalAmount: "$45,660",
    },
    {
        orderNo: "#JY7688",
        name: "Adidas Blaze",
        image: P4,
        price: 654,
        totalOrder: 125,
        totalAmount: "$12,660",
    },
];

const RecentOrders = () => {
    return (
        <div className='lg:w-[70%] bg-white p-5 '>
            <div className="relative overflow-x-auto">
                <h1 className="text-xl font-serif ml-5 mb-2 " >Recent orders</h1>
                <table className="w-full text-xs text-left  text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  capitalize bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-white'>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                Tracking No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Total Order
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Total amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map(order =>
                            <tr key={order.orderNo} className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {order.orderNo}
                                </th>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <img className="w-10" src={order.image} alt="" />
                                        <p className="self-center">{order.name}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {order.price}
                                </td>
                                <td className="px-6 py-4">
                                    {order.totalOrder}
                                </td>
                                <td className="px-6 py-4">
                                    {order.totalAmount}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default RecentOrders;