import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {_id, img, title, price, description} = service;
  return (
    <div className="max-w-screen-xl mx-auto m-5 rounded">
      <div className="card w-full bg-base-100 shadow-xl">
      <div>
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img className="img-f image-full mt-3 rounded-lg" src={img} alt="Shoes" />
            </figure> 
          </PhotoView>
        </PhotoProvider>
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="card-title text-5sm text-red-500">Price: ${price}</p>
          <div>
            {
              description.length > 98 ?
              <p>{description.slice(0, 98) + '...'}</p>
              :
              <p>{description}</p>
            }
          </div>
          <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">view details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
