import React from 'react';
import AddProductForm from '../components/AddProductForm';

const AddProduct = () => {
    return (
        <div>
            <div className='flex justify-center align-middle p-16 mt-5 bg-white rounded w-[80%] mx-auto'>
                <AddProductForm />
            </div>
        </div>
    );
};

export default AddProduct;