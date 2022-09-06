import React, { useEffect, useState } from 'react';
import AllInventoryItems from '../AllInventoryItems/AllInventoryItems';
import { useNavigate } from "react-router-dom";

const ManageInventories = () => {
    let navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleNavigateToAddItem = () => {
        navigate('/add-item')
    }
    return (
        <div className='h-full bg-[#F0ECE3]'>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-center py-12 text-4xl font-bold font-condensed'>Manage Inventories</h2>
                <div className='flex mb-6 justify-end'>
                    <button onClick={handleNavigateToAddItem} className='border-2 border-red-500 py-2 px-12 text-xl font-semibold hover:bg-red-500 hover:text-white'>Add New Item</button>
                </div>
                <div class="overflow-x-auto relative">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    price
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    quantity
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Supplier
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                items.map(item =>
                                    <AllInventoryItems
                                        key={item._id}
                                        item={item}
                                    />
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;