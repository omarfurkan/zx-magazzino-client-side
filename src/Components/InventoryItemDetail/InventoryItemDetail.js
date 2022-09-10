import React from 'react';
import { useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { useState } from 'react';
import { useEffect } from 'react';

const InventoryItemDetail = () => {
    const [itemDetail, setItemDetail] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const num = itemDetail.quantity;
    const [newQuantity, setNewQuantity] = useState(99)
    let { itemId } = useParams();




    useEffect(() => {
        fetch(`http://localhost:5000/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItemDetail(data))
    }, [itemId])

    if (loading) {
        return <Spinner />
    }

    const handleRestock = e => {
        e.preventDefault()
        console.log(e.target.restock.value)
    }


    const handleDeleveredByOne = () => {

        setNewQuantity(newQuantity - 1)
    }


    return (
        <div className='bg-[#F0ECE3] lg:h-screen '>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center pt-32'>
                <div className='lg:w-[500px] '>
                    <img src={itemDetail.img} alt="" />
                </div>
                <div className='px-2 font-poppins mb-16 md:col-span-1  lg:col-span-2'>
                    <div className='lg:w-3/6 border-2 border-red-500 mx-auto px-12 py-16'>
                        <p className='text-xl py-2 font-bold'>{itemDetail.name}</p>
                        <p className=''>{itemDetail.shortDescripton}</p>
                        <p> Quantity: <span className='font-bold'>{itemDetail.quantity}</span> {newQuantity}</p>
                        <p>Price: <span className='text-red-500 text-xl font-blod'> ${itemDetail.price}</span></p>
                        <p className='font-light text-sm'>Supplier: {itemDetail.supplierName}</p>

                        <button onClick={handleDeleveredByOne} className='mt-8 border-2 border-red-500 py-2 lg:px-6 w-full lg:w-fit  hover:bg-red-500 hover:text-white'>Delivered</button>
                        <form onSubmit={handleRestock} className='flex justify-end mt-8 lg:mt-0'>
                            <div className='grid grid-cols-2 border-2 border-red-500 py-2 px-4 hover:bg-red-500 '>
                                <input className='lg:w-20 text-lg order-2 outline-none  ' type="number" name="restock" id="" />
                                <input className='hover:text-white cursor-pointer' type="submit" value="Restock" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InventoryItemDetail;