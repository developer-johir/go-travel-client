import React from 'react';
import ThereService from '../HomeService/ThereService';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ThereService></ThereService>
        </div>
    );
};

export default Home;