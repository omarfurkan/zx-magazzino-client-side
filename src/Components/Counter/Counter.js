import React from 'react';
import { ImOffice } from 'react-icons/im';
import { FaPeopleCarry } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { GiShakingHands } from 'react-icons/gi';

const Counter = () => {
    return (
        <div className=" bg-gradient-to-r from-[#f0ece3] to-[#faeddc] pt-24 pb-40">
            <h2 className='text-4xl text-center font-condensed font-bold pb-16'>Contribution</h2>
            <div className='w-11/12 mx-auto'>
                <div className="grid lg:grid-cols-4 ">

                    <div className='border-2 border-red-500 text-center justify-center py-4 bg-[#e5e7eb]'>
                        <p className='flex justify-center items-center text-red-500 gap-2'><ImOffice className='text-4xl' /> <span className='text-5xl font-poppin font-bold '>15</span> </p>
                        <p className='font-condensed text-xl pt-4 font-bold'>Office Worldwide</p>
                    </div>
                    <div className='border-2 border-red-500 text-center justify-center py-4 bg-[#e5e7eb]'>
                        <p className='flex justify-center items-center text-red-500 gap-2'><FaPeopleCarry className='text-4xl' /> <span className='text-5xl font-poppin font-bold '>915</span> </p>
                        <p className='font-condensed text-xl pt-4 font-bold'>Hardworking People</p>
                    </div>
                    <div className='border-2 border-red-500 text-center justify-center py-4 bg-[#e5e7eb]'>
                        <p className='flex justify-center items-center text-red-500 gap-2'><GiWorld className='text-4xl' /> <span className='text-5xl font-poppin font-bold '>15</span> </p>
                        <p className='font-condensed text-xl pt-4 font-bold'>Countries Covered</p>
                    </div>
                    <div className='border-2 border-red-500 text-center justify-center py-4 bg-[#e5e7eb]'>
                        <p className='flex justify-center items-center text-red-500 gap-2'><GiShakingHands className='text-4xl' /> <span className='text-5xl font-poppin font-bold '>27</span> </p>
                        <p className='font-condensed text-xl pt-4 font-bold'>Year of Experience</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Counter;