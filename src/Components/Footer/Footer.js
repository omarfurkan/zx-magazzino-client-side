import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-black pt-12'>
            <div className='grid lg:grid-cols-3 gap-5 lg:gap-0 w-11/12 mx-auto justify-items-center text-white pb-8'>
                <div>
                    <div>
                        <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-white'>magazzino</span>
                    </div>
                    <p className='flex items-center gap-2 mt-2'> <BsTelephone /> (+88) 0181 231 21352</p>
                    <p className='flex items-center gap-2 mt-2'><AiOutlineMail /> info@xyxabx.com</p>
                    <p className='flex items-center gap-2 mt-2'><GoLocation /> Visaong Street West, DW</p>
                    <p className='flex items-center gap-2 mt-2'><BiTimeFive /> Opening Hours: 8.00AM - 11:59PM</p>
                </div>

                <div>
                    <p>Links</p>
                    <p>Home</p>
                </div>

                <div>
                    <div>
                        <p>Customer Service</p>
                        <p>Contact Us</p>
                        <p>Help & Advice</p>
                        <p>Tems and Conditions</p>
                        <p>Shipping & Returns</p>
                        <p>Delivery Information</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='border-t border-red-500 text-center text-white'>Copyright	&#169; 2022 ZXmagazzino. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;