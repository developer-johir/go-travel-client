import React from "react";

const About = () => {
  return (
    <div className=" bg-base-200">
      <div className="max-w-screen-xl mx-auto py-14">
        <div className="hero-content grid gap-14 grid-cols-1 md:grid-cols-2">
          <img
            src="https://tevily-nextjs.vercel.app/_next/static/media/about-page-img.9d9966a7.jpg"
            className="rounded-lg w-full shadow-2xl"
            alt=""
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">Learn about us</h3>
            <h1 className="text-5xl font-bold my-5">Dare to Explore with Tevil Agency</h1>
            <h2 className="text-3xl font-bold text-yellow-600">
              A Simply Perfect Place to Get Lost
            </h2>
            <p className="py-6">
              We are trusted by our clients and have a reputation for the best services in
              the field. Lorem ipsum is simply free text dolor sit amett consectetur
              adipiscing elit. It is a long established fact that a reader will be
              distracted by the readable content of a page.
            </p>
            <div>
                <div className="flex justify-between text-xl font-bold">
                    <h1>Best Services</h1>
                    <h1 className="mr-10">77%</h1>
                </div>
              <progress
                className="progress progress-error w-full"
                value="70"
                max="100"
              ></progress>
              <div className="flex justify-between text-xl font-bold mt-3">
                    <h1>Tour Agents</h1>
                    <h1 className="mr-10">38%</h1>
                </div>
              <progress
                className="progress progress-error w-full"
                value="40"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
