import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full slider-img">
    <div className='carousel-item relative w-full slider-img'>
    <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-3.fe6aff2e.jpg" className="w-full" alt='' />
    </div>
    <div className="slider-text absolute transform -translate-y-1/3 top-1/3 left-36 right-36">
        <h2 className="text-8xl font-bold text-white text-center">
        <i className='text-red-600'>Travel & Adventures</i>
        </h2>
        <h2 className="text-5xl font-bold text-white text-center mt-3">
        Where Would You Like To Go?
        </h2>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <h3>fghfrtuy</h3>
  </div> 
  <div id="slide2" className="carousel-item relative w-full slider-img">
  <div className='carousel-item relative w-full slider-img'>
  <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-2.4865c85b.jpg" className="w-full" alt=''/>
    </div>
    <div className="slider-text absolute transform -translate-y-1/3 top-1/3 left-36 right-36">
        <h2 className="text-8xl font-bold text-white text-center">
        <i className='text-red-600'>Travel & Adventures</i>
        </h2>
        <h2 className="text-5xl font-bold text-white text-center mt-3">
        Where Would You Like To Go?
        </h2>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full slider-img">
  <div className='carousel-item relative w-full slider-img'>
  <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-1.62fecf08.jpg" className="w-full" alt=''/>
    </div>
    <div className="slider-text absolute transform -translate-y-1/3 top-1/3 left-36 right-36">
        <h2 className="text-8xl font-bold text-white text-center">
        <i className='text-red-600'>Travel & Adventures</i>
        </h2>
        <h2 className="text-5xl font-bold text-white text-center mt-3">
        Where Would You Like To Go?
        </h2>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;