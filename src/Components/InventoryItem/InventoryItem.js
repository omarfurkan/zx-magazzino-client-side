import React from 'react';
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ item }) => {
    const { _id, name, img, price, quantity, shortDescripton, supplierName } = item;
    const navigate = useNavigate('/itemDetail/:itemId');
    return (
        <div className=' border-2 border-red-500 w-full h-[750px] relative'>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='px-2 font-poppins mb-16'>
                <p className='text-lg py-2 font-bold'>{name}</p>
                <p className='font-light'>{shortDescripton}</p>
                <p> Quantity: {quantity}</p>
                <p>Price: <span className='text-red-500 text-xl'> ${price}</span></p>
                <p className='font-light text-xs'>Supplier: {supplierName}</p>

            </div>
            <div className='mt-4 absolute bottom-0 w-full border-t-2 border-red-500 hover:bg-red-500 hover:text-white'>
                <button onClick={() => navigate(`/itemDetail/${_id}`)} className='w-full py-2 px-2 '>Update</button>
            </div>

        </div>
    );
};

export default InventoryItem;