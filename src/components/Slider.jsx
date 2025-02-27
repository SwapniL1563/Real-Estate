import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "office-buildings.jpg",
  "urban-city-architecture.jpg", 
  "new-buildings-with-green-areas.jpg", 
  "office-buildings-with-modern-architecture.jpg", 
  "london-united-kingdom-may-27-2019-tall-skyscraper-buildings-inside-huge-london-city-london-is-one-famous-city-world.jpg"
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col md:items-end items-center gap-5 relative">
      <div className="absolute hidden   top-[40%] md:left-[11vw] md:top-[30%] text-black z-10 gap-3 md:flex flex-col ">
      <h1 className="md:text-5xl text-lg">Premium <br /> Residence</h1>
      <p className="text-gray-800 md:text-base text-xs">438 North 700 West <br /> Salt Lake City , Utah 84110</p>
      </div>
      <div className="flex overflow-hidden w-[85vw] md:w-[1100px]">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `-${index * 300}px` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt="slide" className="w-[100%] md:w-[400px] h-auto mx-1 cursor-pointer " />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex w-[20%] justify-between">
        <div className="hidden md:flex flex-col">
         <h1 className="text-gray-800">All premium </h1>
         <h3 className="text-3xl primary font-semibold">Available</h3>
        </div>
        <div className="hidden md:flex flex-col ">
         <h1 className="text-gray-800">Starting from</h1>
         <h3 className="text-3xl primary font-semibold">$ 300k</h3>
        </div>
        </div>
      <div className="flex gap-2">
      <button className="text-white  bg-primary rounded-full px-5 py-3 md:px-6 md:py-3 text-xl hover:bg-[#e75b35]" onClick={prevSlide}>{"<"}</button>
      <button className="text-white bg-primary rounded-full px-5 py-3 md:px-6 md:py-3 text-xl hover:bg-[#e75b35]" onClick={nextSlide}>{">"}</button>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
