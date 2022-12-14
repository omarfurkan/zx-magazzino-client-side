import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import { useNavigate } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

const InventoryItems = () => {
    const [spinner, setSpinner] = useState(false);
    let navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        setSpinner(true)
        fetch(`https://zx-magazzino-server-side.herokuapp.com/items`)
            .then(res => res.json())
            .then(data => setItems(data))
        setSpinner(false)
    }, [])

    if (spinner) {
        return <Spinner />
    }

    const handleNavigateToManage = () => {
        navigate('/manage-inventories')
    }
    return (
        <div className='bg-[#F0ECE3] pb-20'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center pt-20 pb-14'>
                    <h1 className=' font-condensed text-4xl font-bold'>Inventory Items</h1>
                    <p className='font-poppins'>Constructional Tools</p>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-12'>
                    {
                        items.slice(0, 6).map(item =>
                            <InventoryItem
                                key={item._id}
                                item={item}
                            />
                        )
                    }
                </div>
                <div className='mx-auto flex justify-center  mt-16'>
                    <button onClick={handleNavigateToManage} className=' border-2 border-red-500 py-2 px-12 text-xl font-semibold hover:bg-red-500 hover:text-white'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;