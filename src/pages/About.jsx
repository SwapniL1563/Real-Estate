import React from "react";

const About = () => {
  return (
    <div className="bg-secondary text-white py-12 md:py-16 px-6 sm:px-12 md:px-24 space-y-12">
      {/* About Us Section */}
      <section className="space-y-6 border-b-2 pb-10 border-gray-800">
        <div className="flex justify-between items-start">
          <span className="primary text-sm">01.</span>
          <a href="/" className="text-sm text-gray-400 hover:underline">Learn More →</a>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold">About Us.</h2>
        <p className="text-gray-300 text-lg max-w-2xl">
          Our team of experienced <span className="font-bold">real estate</span> agents is dedicated to providing exceptional service and <span className="font-bold">expert advice to our clients.</span>
        </p>
        <div className="flex space-x-8 text-gray-400 text-sm">
          <div>
            <p className="uppercase">From</p>
            <p className="text-white">Indonesia, ID</p>
          </div>
          <div>
            <p className="uppercase">Start from</p>
            <p className="text-white">2018 - Recent</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-start">
          <span className="primary text-sm">02.</span>
          <a href="/" className="text-sm text-gray-400 hover:underline">Learn More →</a>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold">Why Choose Us?</h2>
        <div className="text-3xl sm:text-4xl font-semibold space-y-4 text-white hover:text-[#FE6E48] cursor-pointer">
          <p className="text-white hover:text-[#FE6E48] hover:underline">Quick Process →</p>
          <p className="text-white hover:text-[#FE6E48] hover:underline">Best Price →</p>
          <p className="text-white hover:text-[#FE6E48] hover:underline">Customize →</p>
          <p className="text-white hover:text-[#FE6E48] hover:underline">Property Quality</p>
        </div>
        <p className="text-gray-400 text-sm max-w-lg">
          We are passionate about helping clients find the best property with the latest tools and technologies.
        </p>
      </section>
    </div>
  );
};

export default About;
