import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ texts }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-primary text-white py-4 relative flex">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 120,
          repeat: Infinity
        }}
        style={{ display: "flex", minWidth: "max-content" }}
      >
        {[...texts, ...texts].map((text, index) => (
          <span key={index} className="text-lg font-semibold px-4">
           {text} 
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;