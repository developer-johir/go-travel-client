import React from 'react';

const ServicesCard = ({service}) => {
    const {img, title, price, description, rating, review} = service;
    return (
        <div className='bo border m-5 rounded'>
            <img src={img} alt="" />
            <h2 className='text-w text-white text-4xl'>{title}</h2>
            <h4>Rating: {rating}</h4>
            <h3 className='text-red-600 font-bold'>Price: {price}</h3>
            <p>{description}</p>
            <h4>Review: {review}</h4>
        </div>
    );
};

export default ServicesCard;