import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(auth);
    const location = useLocation();



    if (loading) {
        return <Spinner />
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='h-screen pt-12 bg-[#F0ECE3]'>
            <div className='w-11/12 mx-auto'>
                <h3 className='text-center text-red-500 text-2xl font-condensed font-bold py-2'>Your Email is not verified</h3>
                <p className='text-center text-xl font-condensed pt-2  pb-6'>Please verify your email</p>
                <div className='flex justify-center'>
                    <button onClick={async () => {
                        await sendEmailVerification();
                        toast('Verification Email Send Again')
                    }} className=' border-2 border-red-500 py-2 px-12 text-xl font-semibold hover:bg-red-500 hover:text-white'>Send email for verification again</button>
                </div>
            </div>
        </div >
    }


    return children;

};

export default RequireAuth;