import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import InventoryItems from '../InventoryItems/InventoryItems';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner />
            <InventoryItems />
            <Testimonial />
            <Counter />
            <Footer />
        </>
    );
};

export default Home;