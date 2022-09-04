import React from 'react';
import TestimonalSays from './TestimonalSays';

const Testimonial = () => {

    const clientsSay = [
        {
            comment: 'I bought large number of product with in a very easy management and delevary ontime with some extra facilities and they hold good behaviour',
            name: 'Micheal Gough',
            img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
            post: 'Manager of JAK Ltd.'
        },
        {
            comment: 'I bought large number of product with in a very easy management and delevary ontime with some extra facilities and they hold good behaviour',
            name: 'Dino Moria',
            img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
            post: 'CEO at Jumaira Group.'
        }
    ]


    return (
        <div className='bg-gray-200'>
            <h2 className='text-center font-condensed font-bold text-4xl py-12'>Testimonials</h2>
            <div className=' grid grid-cols-2 w-11/12 mx-auto pb-16'>
                {
                    clientsSay.map((clientSay, index) => <TestimonalSays
                        key={index}
                        clientSay={clientSay} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;