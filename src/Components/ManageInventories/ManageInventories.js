import React, { useEffect, useState } from 'react';
import AllInventoryItems from '../AllInventoryItems/AllInventoryItems';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';


const ManageInventories = () => {
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        setSpinner(true)
        fetch(`http://localhost:5000/items`)
            .then(res => res.json())
            .then(data => setItems(data))
        setSpinner(false)
    }, []);

    if (spinner) {
        return <Spinner />
    }

    const handleNavigateToAddItem = () => {
        navigate('/add-item')
    }

    const handleDelete = DeleteId => {
        console.log(DeleteId)

        const proceed = window.confirm('Are you sure')
        if (proceed) {
            const url = `http://localhost:5000/item/${DeleteId}`
            fetch(url, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remains = items.filter(item => item._id !== DeleteId)
                        setItems(remains)
                    }

                });
        }

    }


    return (
        <div className='pt-12 bg-[#F0ECE3]'>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-center py-12 text-4xl font-bold font-condensed'>Manage Inventories</h2>
                <div className='flex mb-6 justify-end'>
                    <button onClick={handleNavigateToAddItem} className='border-2 border-red-500 py-2 px-12 text-xl font-semibold hover:bg-red-500 hover:text-white'>Add New Item</button>
                </div>
                <div className="overflow-x-auto relative mb-12">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    quantity
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Supplier
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                items.map(item =>
                                    <AllInventoryItems
                                        key={item._id}
                                        item={item}
                                        handleDelete={handleDelete}
                                    />
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManageInventories;