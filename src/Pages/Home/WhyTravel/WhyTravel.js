import React from "react";

const WhyTravel = () => {
  return (
    <div className="">
      <div
        className="py-16 hero-overlay bg-opacity-40"
        style={{
          backgroundImage: `url("https://tourx-react.b-cdn.net/static/media/achiv-shape.a7f385e2.png")`,
        }}
      >
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center">
            <h2 className="text-xl font-bold text-red-500">Choose Your Package</h2>
            <h1 className="text-5xl font-bold mt-4">
                Select Your Best Package For <br /> Your Travel
            </h1>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center pt-14">
            <div className="card w-80 bg-gray-800 shadow-xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://tourx-react.b-cdn.net/static/media/d-4.3738ba23.png"
                    alt="Shoes"
                    className="rounded-xl"
                />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-white w-60">2000+ Our worldwide guide</h2>
                </div>
            </div>
            <div className="card w-80 bg-gray-800 shadow-xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://tourx-react.b-cdn.net/static/media/d-8.919b1dd2.png"
                    alt="Shoes"
                    className="rounded-xl"
                />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-white w-60">100% trusted travel agency
</h2>
                </div>
            </div>
            <div className="card w-80 bg-gray-800 shadow-xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://tourx-react.b-cdn.net/static/media/d-5.59174a4e.png"
                    alt="Shoes"
                    className="rounded-xl"
                />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-white w-60">10+ year of travel experience
</h2>
                </div>
            </div>
            <div className="card w-80 bg-gray-800 shadow-xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://tourx-react.b-cdn.net/static/media/d-9.8c83c289.png"
                    alt="Shoes"
                    className="rounded-xl"
                />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-white w-60">90% of our traveller happy</h2>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTravel;
