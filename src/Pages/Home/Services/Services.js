import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://go-travel-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useTitle("Services");
  return (
    <div className="py-10">
      <div className="pl-14">
        <h2 className="text-xl font-bold text-red-500">Choose Your Package</h2>
        <h1 className="text-5xl font-bold mt-4">
          Select Your Best Package For Your Travel
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Services;
