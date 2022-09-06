import React from 'react';
import notfoundImg from '../../Images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-full h-screen' src={notfoundImg} alt="" />
        </div>
    );
};

export default NotFound;