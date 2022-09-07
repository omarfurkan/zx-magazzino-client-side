import React from 'react';

const AddItem = () => {
    return (
        <div className=' bg-[#F0ECE3]'>
            <div className='lg:w-4/12  mx-auto py-20 '>
                <div className='border border-red-500'>
                    <div className='flex justify-center my-6'>
                        <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-black'>magazzino</span>
                    </div>
                    <form className='mx-auto w-11/12 mt-6 mb-6'>
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="name" id="" placeholder='Product Name' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="price" id="" placeholder='Price' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="quantity" id="" placeholder='Quantity' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="supplier" id="" placeholder='Supplier Name' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="photo" id="" placeholder='Photo URL' required />
                        <br />
                        <textarea className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' name="description" placeholder='Short Description' id="" rows="4" required></textarea>
                        <br />
                        <input className=' font-condensed text-xl border-2 border-red-500 bg-red-500 text-white py-3 mt-3 w-full mx-auto cursor-pointer hover:bg-[#F0ECE3] hover:text-black ' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;