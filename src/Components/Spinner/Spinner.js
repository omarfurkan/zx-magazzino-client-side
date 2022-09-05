import React from 'react';

import { Bars } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#F0ECE3] '>
            <Bars
                height="80"
                width="80"
                color="#ef4444"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;