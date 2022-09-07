import React from 'react';

const AllInventoryItems = ({ item }) => {


    const handleDelete = DeleteId => {
        console.log(DeleteId)
        const url = `http://localhost:5000/item/${DeleteId}`
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    const { _id, name, img, price, quantity, shortDescripton, supplierName } = item;
    return (
        <tr className="bg-white border-b font-poppins">

            <td className="py-4 px-6  font-bold">
                {name}
            </td>

            <td className="py-4 px-6">
                {shortDescripton}
            </td>
            <td className="pt-9 px-6 text-red-500 flex gap-1 items-center ">
                <p>$</p><p className=' text-lg'>{price}</p>
            </td>
            <td className="py-4 px-6">
                {quantity}
            </td>
            <td className="py-4 px-6">
                {supplierName}
            </td>
            <td className="py-4 px-6">
                <img className='w-20' src={img} alt="" />
            </td>
            <td className="py-4 px-6">
                <button onClick={() => handleDelete(_id)} className='border-2 border-red-500 py-2 px-6  hover:bg-red-500 hover:text-white'>Delete</button>
            </td>

        </tr >
    );
};

export default AllInventoryItems;