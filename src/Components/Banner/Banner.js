import React from 'react';
import BannerImg from '../../Images/banner.jpg'
const Banner = () => {
    return (
        <div className=''>
            <img className='w-full block relative' src={BannerImg} alt="" />
            <div className=' absolute top-[92px]  lg:top-52 lg:left-60 text-opacity-10'>
                <h1 className='text-center hidden lg:block lg:text-left'><span className='text-red-500 font-black lg:text-8xl'>ZX</span><span className='font-qahiri lg:text-8xl text-white '>magazzino</span></h1>
                <h3 className='text-white w-11/12 mx-auto lg:mx-0 lg:w-full lg:my-6 font-condensed lg:text-2xl'>A SAFE <span className='text-red-500'>WAREHOUSE </span> IS BETTER <span className='text-red-500'>WAREHOUSE</span></h3>
                <p className='text-white w-11/12 mx-auto lg:mx-0 lg:w-3/6 font-condensed lg:text-xl'>Make Life easier with ZXmagazzino.Where you can manage all your inventories with nessasary ferature that make your life easer.</p>
                <div className='text-white flex gap-5 lg:mt-6 items-center  justify-center lg:justify-start'>
                    <button className='border-2 py-2 px-4 font-condensed hover:bg-white hover:text-black'>Take A Look</button>
                    <button className='border-2 py-2 px-6 font-condensed hover:bg-white hover:text-black'>Contact Us</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;