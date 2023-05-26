import React from 'react';
import AddProductForm from '../components/AddProductForm';

const AddProduct = () => {
    return (
        <div className='flex justify-center align-middle p-16 mt-5 bg-white rounded lg:w-[80%]  mx-auto'>
            <AddProductForm />
        </div>
    );
};

export default AddProduct;