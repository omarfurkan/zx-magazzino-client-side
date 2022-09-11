import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import MyItemList from '../MyItemList/MyItemList';

const MyItems = () => {
    const navigate = useNavigate();
    const [myItems, setMyitems] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url, {
            headers: {
                authrization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((response) => response.json())
            .then((data) => setMyitems(data))
    }, [user?.email, navigate]);

    const handleDelete = DeleteId => {
        console.log(DeleteId)
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${DeleteId}`
            fetch(url, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data?.deletedCount > 0) {
                        const remains = myItems.filter(item => item._id !== DeleteId)
                        setMyitems(remains)
                    }

                });
        }



    }


    return (
        <div className=' bg-[#F0ECE3]'>
            <div className='w-11/12 mx-auto py-12'>
                <h2 className='text-center font-condensed font-bold text-4xl pb-8'>My Items : {myItems.length}</h2>
                <div className="overflow-x-auto relative">
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
                                myItems.map(myItem =>
                                    <MyItemList
                                        key={myItem._id}
                                        myItem={myItem}
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

export default MyItems;