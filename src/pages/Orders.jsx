import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { ordersData, ordersGrid } from '../data/data';

const Orders = () => {
    return (
        <div >
            <h1 className='text-2xl font-serif mt-5 ml-10 mb-6 text-gray-600'>Order List</h1>
            <div className='w-[95%] mx-auto bg-white rounded h-[100vh] p-10'>
                <DataGrid
                    rows={ordersData.slice(0,30)}
                    columns={ordersGrid}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }} 
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default Orders;