import React from "react";

const ThereServiceCard = ({ services }) => {
  const { img, title, price, description} = services;
  return (
    <div className="max-w-screen-xl mx-auto m-5 rounded">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="img-f image-full mt-3 rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="card-title text-5sm text-red-500">Price: ${price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThereServiceCard;
