import React from 'react';
import Upload from './Upload';

const AddProductForm = () => {
    return (
        <form className='border border-gray-200 rounded-md lg:w-[90%] md:w-[80%]  lg:p-10'>
            <Upload /> 
            <div className="mt-5">
                <label className="text-lg text-gray-500 font-serif " >Product Name</label><br />
                <input type="text" className="w-full bg-gray-100 my-2 border border-gray-200 rounded py-2" required  />
            </div>
            <div>
                <label className="text-lg text-gray-500 font-serif " >Category</label><br />
                <input type="text" className="w-full bg-gray-100 my-2 border border-gray-200 rounded py-2" />
            </div>
            <div>
                <label className="text-lg text-gray-500 font-serif " >Price</label><br />
                <input type="number" className="w-full bg-gray-100 my-2 border border-gray-200 rounded py-2" />
            </div>
            <div>
                <label className="text-lg text-gray-500 font-serif " >Description</label><br />
                <textarea className="w-full bg-gray-100 my-2 border border-gray-200 rounded py-2 "  />
            </div>
            <input  type="submit" value="Add" className="w-full bg-blue-400 my-2 border text-white rounded py-2" />
        </form>
    );
};

export default AddProductForm;