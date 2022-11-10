import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThereServiceCard from "./ThereServiceCard";

const ThereService = () => {
  const [thereService, setThereService] = useState([]);

  useEffect(() => {
    fetch("https://go-travel-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setThereService(data));
  }, []);
  return (
    <div className="bg-stone-50 py-5">
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="pl-14">
          <h2 className="text-xl font-bold text-red-500 mt-48">Choose Your Package</h2>
          <h1 className="text-5xl font-bold mt-4">
            Select Your Best Package For Your Travel
          </h1>
        </div>
        <div className="">
          <img
            src="https://tevily-nextjs.vercel.app/_next/static/media/about-one-img-1.e526a0a5.png"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-5">
        {thereService.map((services) => (
          <ThereServiceCard key={services._id} services={services}></ThereServiceCard>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto  text-center pb-14">
        <Link to="/services">
          <button className="btn btn-primary font-bold w-96">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default ThereService;
