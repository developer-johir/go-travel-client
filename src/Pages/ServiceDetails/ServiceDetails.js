import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    console.log(services.length)
    return (
        <div>
            <h2>This is Services Details{services.length}</h2>
        </div>
    );
};

export default ServiceDetails;