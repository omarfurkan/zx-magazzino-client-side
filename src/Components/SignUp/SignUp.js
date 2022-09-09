import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';


const SignUp = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [misMatch, setMisMatch] = useState('');
    const from = location?.state?.form?.pathname || '/'


    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
            setMisMatch('')

        }
        else {
            setMisMatch('Password did not match')

        }

    }
    if (loading) {
        return <Spinner />;
    }
    if (user) {
        navigate(from, { replace: true });
    }



    return (
        <div className='lg:h-screen pb-8 bg-[#F0ECE3]'>
            <div className='lg:w-4/12  mx-auto lg:pt-40 '>
                <div className='border border-red-500'>
                    <div className='flex justify-center my-6'>
                        <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-black'>magazzino</span>
                    </div>
                    <form onSubmit={handleSignUp} className='mx-auto w-11/12 mt-6 mb-6'>
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                        <br />
                        <p className='font-condensed text-red-500'>{misMatch}</p>
                        <p className='text-red-500 font-condensed'>{error ? error.message : ''}</p>
                        <input className=' font-condensed text-xl border-2 border-red-500 bg-red-500 text-white py-3 mt-3 w-full mx-auto cursor-pointer hover:bg-[#F0ECE3] hover:text-black ' type="submit" value="Sign Up" />
                    </form>
                    <div className='w-11/12 mx-auto mb-2 font-condensed'>

                        <Link to={'/login'} className='text-right cursor-pointer hover:underline'>Already have an account? <span className='text-red-500'>Login</span></Link>
                    </div>
                    <div className='flex items-center justify-items-center w-11/12 mx-auto mb-4'>
                        <hr className='h-1 w-full  bg-red-500 ' />
                        <p className='basis-1/4 text-center'>Or</p>
                        <hr className='h-1 w-full  bg-red-500 ' />
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;