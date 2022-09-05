import React from 'react';

const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='h-screen bg-[#F0ECE3]'>
            <div className='w-4/12  mx-auto pt-40 '>
                <div className='border border-red-500'>
                    <div className='flex justify-center my-4'>
                        <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-black'>magazzino</span>
                    </div>
                    <form onSubmit={handleSignUp} className='mx-auto w-11/12 my-12'>
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="email" name="email" id="" placeholder='Email' />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="password" name="password" id="" placeholder='Password' />
                        <br />
                        <input className=' font-condensed text-xl border-2 bg-red-500 text-white py-3 w-full mx-auto cursor-pointer' type="submit" value="SignUp" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;