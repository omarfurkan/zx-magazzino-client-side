import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='bg-black py-2'>
            <nav className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-white'>magazzino</span>
                </div>
                <div >
                    <Link to="/" className='text-white pb-2 border-red-500 hover:border-b-2'>Home</Link>
                    <Link to="/blogs" className='text-white pb-2 border-red-500 hover:border-b-2  ml-4'>Blogs</Link>
                    {
                        !user ?
                            <Link to="/login" className='text-white pb-2 border-red-500 hover:border-b-2 ml-4'>Login</Link>

                            :

                            <>
                                <Link to="/manage-inventories" className='text-white pb-2 border-red-500 hover:border-b-2 ml-4'>Manage</Link>
                                <Link to="/add-item" className='text-white pb-2 border-red-500 hover:border-b-2 ml-4'>Add-Item</Link>
                                <Link to="/myitems" className='text-white pb-2 border-red-500 hover:border-b-2 ml-4'>My-Item</Link>


                                <button onClick={() => signOut(auth)} className='text-white pb-2 my-0 mx-0 border-red-500 hover:border-b-2 cursor-pointer ml-4'>Sign Out</button>

                            </>



                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;