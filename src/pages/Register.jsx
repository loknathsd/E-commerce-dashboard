import React, { useState} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = { name, email, password };
        setData([...data, info]);
        localStorage.setItem('newUser', JSON.stringify([...data,info]));
        navigate('/login');
    }
    return (
        <div className='bg-gray-100 w-full lg:h-[100vh] flex justify-center'>
            <div className=' lg:w-[50%] md:w-[60%] shadow-lg  h-5/6 bg-white mt-10 rounded-lg text-center max-sm:p-8'>
                <div className='font-serif max-lg:p-10' >
                    <h1 className='mt-12 text-3xl font-serif capitalize'>Create an account</h1>
                    <div className='lg:flex md:flex justify-center gap-3 mt-10 mb-8'>
                        <button className='border-2 border-gray-30 lg:w-[42%] md:w-full max-sm:w-full  rounded-md py-2 flex justify-center items-center align-middle '>
                            <FcGoogle className='mr-3 text-2xl' /> SignUp with Google
                        </button>
                        <button className='  border-2 border-gray-30 lg:w-[42%] md:w-full max-sm:w-full  max-sm:mt-5 lg:mt-0 rounded-md py-2 flex justify-center items-center align-middle '>
                            <FaFacebookF className='mr-3 text-2xl text-blue-600' /> SignUp with Facebook
                        </button>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <hr className='w-1/3 border-1 border-gray-300' />
                        <span className='text-gray-500 font-medium text-lg'>Or</span>
                        <hr className='w-1/3 border-1 border-gray-300' />
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className='lg:flex justify-center text-left'>
                            <div className='lg:w-[84%] '>
                                <label >Name</label><br />
                                <input onChange={(e) => setName(e.target.value)} type="text" className='mt-2 border-2 border-gray-30 w-full  py-2 rounded-md px-3' name="name" value={name} required />
                            </div>
                        </div>
                        <div className='lg:flex md:flex justify-center gap-3 text-left mt-4 mb-6 font-serif'>
                            <div className='lg:w-[42%] md:w-[50%]'>
                                <label>Email</label><br />
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full  mt-2 border-2 border-gray-30  py-2 rounded-md px-3' name="email" value={email} required />
                            </div>
                            <div className='lg:w-[42%] md:w-[50%]'>
                                <label>Password</label><br />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className='w-full mt-2 border-2 border-gray-30   py-2 rounded-md px-3' name="password" value={password} required />
                            </div>
                        </div>
                        <input className='cursor-pointer border-2 border-gray-30 rounded-md text-white w-[86%] py-2 bg-sky-500' type="submit" value="SignUp" />
                    </form>
                    <p className='my-5 text-sm text-gray-400'>Do you already have an account? {" "} <Link to="/login"> <span className='text-blue-600 underline'>Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;