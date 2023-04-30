import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='bg-gray-100 w-full h-[100vh] flex justify-center'>
            <div className=' w-[50%] shadow-lg  h-3/4 bg-white mt-10 rounded-md text-center '>
                <div className='font-serif' >
                    <h1 className='mt-12 text-3xl font-serif'>SignIn To Dashboard</h1>
                    <div className='flex justify-center gap-3 my-8'>
                        <button className='border-2 border-gray-30 w-72  rounded-md py-2 flex justify-center items-center align-middle '>
                            <FcGoogle className='mr-3 text-2xl' /> Sign in with Google
                        </button>
                        <button className='border-2 border-gray-30 w-72  rounded-md py-2 flex justify-center items-center align-middle '>
                            <FaFacebookF className='mr-3 text-2xl text-blue-600' /> Sign in with Facebook
                        </button>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <hr className='w-1/3 border-1 border-gray-300' />
                        <span className='text-gray-500 font-medium text-lg'>Or</span>
                        <hr className='w-1/3 border-1 border-gray-300' />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex justify-center gap-3 text-left mt-4 mb-6 font-serif'>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input className=' mt-2 border-2 border-gray-30 w-72 py-2 rounded-md px-3' {...register("email", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="">Password</label><br />
                                <input className='mt-2 border-2 border-gray-30 w-72 py-2 rounded-md px-3' {...register("password", { required: true })} />
                            </div>
                        </div>

                        <input className='cursor-pointer border-2 border-gray-30 rounded-md text-white w-[86%] py-2 bg-sky-500' type="submit" value="SignIn" />
                    </form>
                    <p className='my-5 text-sm text-gray-400'> Don't have an account?{" "} <a href="d"> Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;