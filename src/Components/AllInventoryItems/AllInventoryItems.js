import React from 'react';

const AllInventoryItems = ({ item }) => {
    const { _id, name, img, price, quantity, shortDescripton, supplierName } = item;
    return (
        <tr class="bg-white border-b font-poppins">

            <td class="py-4 px-6  font-bold">
                {name}
            </td>

            <td class="py-4 px-6">
                {shortDescripton}
            </td>
            <td class="pt-9 px-6 text-red-500 flex gap-1 items-center ">
                <p>$</p><p className=' text-lg'>{price}</p>
            </td>
            <td class="py-4 px-6">
                {quantity}
            </td>
            <td class="py-4 px-6">
                {supplierName}
            </td>
            <td class="py-4 px-6">
                <img className='w-20' src={img} alt="" />
            </td>
            <td class="py-4 px-6">
                <button className='border-2 border-red-500 py-2 px-6  hover:bg-red-500 hover:text-white'>Delete</button>
            </td>

        </tr >
    );
};

export default AllInventoryItems;