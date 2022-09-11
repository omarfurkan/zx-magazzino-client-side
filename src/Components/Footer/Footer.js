import React from 'react';
import { BsFacebook, BsTelephone } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Footer = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-black pt-12 '>
            <div className='grid grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-0 w-11/12 mx-auto justify-items-center  text-white pb-8'>
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
                    <p className='font-condensed font-bold text-xl mb-2'>Links</p>
                    <p> <Link to='/'>Home</Link></p>
                    <p><Link to='/blogs'>Blogs</Link></p>

                    {
                        user &&
                        <>
                            <p><Link to="/manage-inventories" >Manage</Link></p>
                            <p> <Link to="/add-item" >Add-Item</Link></p>
                            <p>  <Link to="/myitems" >My-Item</Link></p>
                        </>
                    }
                    <div className='grid grid-cols-4 gap-4 mt-2 text-2xl items-center justify-center'>
                        <p> <a href="https://www.facebook.com"><BsFacebook /></a></p>
                        <p> <a href='https://www.instagram.com/'><AiFillInstagram /></a></p>
                        <p> <a href='https://twitter.com/'><FaTwitter /></a></p>
                        <p> <a href='https://web.whatsapp.com/'><IoLogoWhatsapp /></a></p>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='font-condensed font-bold text-xl mb-2'>Customer Service</p>
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