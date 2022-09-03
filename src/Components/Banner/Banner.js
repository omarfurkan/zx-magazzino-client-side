import React from 'react';
import BannerImg from '../../Images/banner.jpg'
const Banner = () => {
    return (
        <div className='absolute'>
            <div>
                <img src={BannerImg} alt="" />
            </div>
            <div className='w-9/12 mx-auto relative top-[-590px]'>
                <h1><span className='text-red-500 font-black text-8xl'>ZX</span><span className='font-qahiri text-8xl text-white '>magazzino</span></h1>
                <h3 className='text-white my-6 font-condensed'>A SAFE <span className='text-red-500'>WAREHOUSE </span> IS BETTER <span className='text-red-500'>WAREHOUSE</span></h3>
                <p className='text-white w-3/6 font-condensed'>Make Life easier with ZXmagazzino.Where you can manage all your inventories with nessasary ferature that make your life easer.</p>
                <div className='text-white flex gap-5 mt-6 '>
                    <button className='border-2 py-2 px-4 font-condensed'>Take A Look</button>
                    <button className='border-2 py-2 px-6 font-condensed'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;