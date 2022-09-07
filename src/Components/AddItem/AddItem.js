import React from 'react';

const AddItem = () => {


    const handleAddItem = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;
        const shortDescripton = e.target.shortDescripton.valu;

        const url = `http://localhost:5000/item`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                { name, price, quantity, supplierName, shortDescripton }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));


    }

    return (
        <div className=' bg-[#F0ECE3]'>
            <div className='lg:w-4/12  mx-auto py-20 '>
                <div className='border border-red-500'>
                    <div className='flex justify-center my-6'>
                        <span className=' text-red-500 font-black text-4xl' >ZX</span> <span className='font-qahiri text-4xl text-black'>magazzino</span>
                    </div>
                    <form onSubmit={handleAddItem} className='mx-auto w-11/12 mt-6 mb-6'>
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="name" id="" placeholder='Product Name' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="price" id="" placeholder='Price' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="quantity" id="" placeholder='Quantity' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="supplierName" id="" placeholder='Supplier Name' required />
                        <br />
                        <input className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' type="text" name="photo" id="" placeholder='Photo URL' required />
                        <br />
                        <textarea className='border-2 w-full my-4 py-2 pl-2 outline-0 border-red-500 font-condensed text-xl bg-gray-200' name="shortDescripton" placeholder='Short Description' id="" rows="4" required></textarea>
                        <br />
                        <input className=' font-condensed text-xl border-2 border-red-500 bg-red-500 text-white py-3 mt-3 w-full mx-auto cursor-pointer hover:bg-[#F0ECE3] hover:text-black ' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;