import {React,useEffect,useState} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loggedUser,setLoggedUser] = useState([]);
     const {setUser} = useAuth();
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        const getUser = localStorage.getItem('newUser');
        const userData = JSON.parse(getUser);
        setLoggedUser(userData);
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(loggedUser===null){
            alert('You have no account!!.Please create an Account');
            navigate('/register');
        }
        const user = loggedUser?.filter(user=>{
            return user.email=== email && user.password === password ;
        })
        if(user?.length ===0){
            alert('Invalid Credential');
        }else if(user && user?.length>0){
            setUser(user[0])
            sessionStorage.setItem('user',JSON.stringify(user[0]))
            navigate(from , {replace : true});
        }
    }
    return (
        <div className='bg-gray-100 w-full h-[100vh] flex justify-center'>
            <div className=' lg:w-[50%]  md:w-[60%] shadow-lg  lg:h-3/4 max-sm:h-[100vh] bg-white mt-16 rounded-lg text-center max-sm:p-5 '>
                <div className='font-serif max-lg:p-10' >
                    <h1 className='lg:mt-12 md:mt-12 max-sm:mt-5 text-3xl font-serif'>SignIn To Dashboard</h1>
                    <div className='lg:flex md:flex justify-center gap-3 mt-10 mb-8'>
                        <button className='border-2 border-gray-30 lg:w-[40%] max-md:w-full rounded-md py-2 px-2 flex justify-center items-center align-middle '>
                            <FcGoogle className='mr-3 text-2xl' /> SignIn with Google
                        </button>
                        <button className='max-sm:mt-5 border-2 border-gray-30 lg:w-[40%] max-md:w-full px-2 rounded-md py-2 flex justify-center items-center align-middle '>
                            <FaFacebookF className='mr-3 text-2xl text-blue-600' /> SignIn with Facebook
                        </button>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <hr className='w-1/3 border-1 border-gray-300' />
                        <span className='text-gray-500 font-medium text-lg'>Or</span>
                        <hr className='w-1/3 border-1 border-gray-300' />
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='lg:flex md:flex justify-center gap-3 text-left mt-4 mb-6 font-serif'>
                            <div className='lg:w-[40%]'>
                                <label>Email</label><br />
                                <input onChange={(e)=>setEmail(e.target.value)} className=' w-full mt-2 border-2 border-gray-30   py-2 rounded-md px-3' type="email" name="email" value={email} required />
                            </div>
                            <div className='lg:w-[40%]'>
                                <label>Password</label><br />
                                <input onChange={(e)=>setPassword(e.target.value)} className='w-full mt-2 border-2 border-gray-30   py-2 rounded-md px-3' type="password" name="password" value={password} required />
                            </div>
                        </div>
                        <input className='cursor-pointer border-2 border-gray-30 rounded-md text-white w-[82%] py-2 bg-sky-500' type="submit" value="SignIn" />
                    </form>
                    <p className='my-5 text-sm text-gray-400'> Don't have an account?{" "} <Link to="/register"> <span className='text-blue-600 underline'>Create an account</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;