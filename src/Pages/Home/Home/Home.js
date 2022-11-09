import React from 'react';
import ThereService from '../HomeService/ThereService';
import Slider from '../Slider/Slider';
import WhyTravel from '../WhyTravel/WhyTravel';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ThereService></ThereService>
            <WhyTravel></WhyTravel>
        </div>
    );
};

export default Home;