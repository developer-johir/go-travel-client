import React from 'react';
import About from '../About/About';
import ThereService from '../HomeService/ThereService';
import Slider from '../Slider/Slider';
import WhyTravel from '../WhyTravel/WhyTravel';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ThereService></ThereService>
            <WhyTravel></WhyTravel>
            <About></About>
        </div>
    );
};

export default Home;