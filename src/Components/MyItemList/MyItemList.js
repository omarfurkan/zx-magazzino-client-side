import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const MyItemList = (props) => {
    const { _id, name, img, price, quantity, shortDescripton, supplierName } = props.myItem;
    const { handleDelete } = props
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
                <button onClick={() => handleDelete(_id)} className='border-2 border-red-500 py-4 px-4  text-red-500 hover:bg-red-500 hover:text-white'><RiDeleteBinFill className='text-2xl' /></button>
            </td>

        </tr >
    );
};

export default MyItemList;