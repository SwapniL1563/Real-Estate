import React from "react";
import { motion } from "framer-motion";

const ScrollDownIndicator = () => {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Rotating Circular Text */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10"
              fill="transparent"
            />
          </defs>
          <text className="text-[0.895rem] font-semibold" fill="black">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              • scroll down  • scroll down  • scroll down
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center Arrow */}
      <motion.div
        className="absolute bg-primary px-6 py-6 rounded-full border-1 border-bl"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L6 10H18L12 16Z" fill="white" />
        </svg>
      </motion.div>
    </div>
  );
};

  export default ScrollDownIndicator;