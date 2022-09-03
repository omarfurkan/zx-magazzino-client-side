import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='bg-[#F0ECE3] pb-20'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center pt-20 pb-14'>
                    <h1 className=' font-condensed text-4xl font-bold'>Inventory Items</h1>
                    <p className='font-poppins'>Constructional Tools</p>
                </div>
                <div className='grid grid-cols-4 gap-12'>
                    {
                        items.slice(0, 6).map(item =>
                            <InventoryItem
                                key={item._id}
                                item={item}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;