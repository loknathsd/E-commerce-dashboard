import React  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { customersGrid,customersData } from '../data/data';

const Customers = () => {
    return (
        <div >
            <h1 className='text-3xl font-serif mt-5 ml-10 mb-6 text-gray-600'>Customer List</h1>
            <div className='w-[95%] mx-auto bg-white rounded h-[100vh] p-10'>
                <DataGrid
                   className=''
                    rows={customersData}
                    columns={customersGrid}
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

export default Customers;