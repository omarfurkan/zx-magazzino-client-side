import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black py-2'>
            <nav className='w-11/12 mx-auto grid grid-cols-2 items-center'>
                <div>
                    <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-white'>magazzino</span>
                </div>
                <div>
                    <Link to="/" className='text-white pb-2 border-red-500 hover:border-b-2'>Home</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;