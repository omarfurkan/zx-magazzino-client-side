import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, googlUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleLoading) {
        return <Spinner />;
    }
    return (
        <div className='w-11/12 mx-auto mb-12'>
            <button onClick={() => signInWithGoogle()} className=' font-condensed text-xl border-2 border-red-500 hover:bg-red-500 hover:text-white mb-4 py-3 w-full  flex justify-center items-center gap-6'><FcGoogle /> Countinue with Google</button>
            <button className=' font-condensed text-xl border-2 border-red-500 hover:bg-red-500 hover:text-white mb-4 py-3 w-full  flex justify-center items-center gap-6'><BsFacebook className='text-[#4267B2]' /> Countinue with Facebook</button>
            <p className='font-condensed text-red-500'>{googleError ? googleError.message : ''}</p>
        </div>
    );
};

export default SocialLogin;