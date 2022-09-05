import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div className='w-11/12 mx-auto mb-12'>
            <button className=' font-condensed text-xl border-2 border-red-500 hover:bg-red-500 hover:text-white mb-4 py-3 w-full  flex justify-center items-center gap-6'><FcGoogle /> Countinue with Google</button>
            <button className=' font-condensed text-xl border-2 border-red-500 hover:bg-red-500 hover:text-white mb-4 py-3 w-full  flex justify-center items-center gap-6'><BsFacebook className='text-[#4267B2]' /> Countinue with Facebook</button>
        </div>
    );
};

export default SocialLogin;