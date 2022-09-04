import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import InventoryItems from '../InventoryItems/InventoryItems';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner />
            <InventoryItems />
            <Testimonial />
            <Counter />
        </>
    );
};

export default Home;