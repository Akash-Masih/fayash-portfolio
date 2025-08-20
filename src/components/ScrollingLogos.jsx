import React from "react";
import { motion } from "framer-motion";

// Import your logos
import abs1L from "../assets/absL.png";
import absml from "../assets/abs-mr.png";
import burjl from "../assets/burjq.png";
import abs1l from "../assets/abs1.png";
import pearlpl from "../assets/p1p.png";
import pearlc1l from "../assets/p1c1.png";
import pealcaptl from "../assets/pearl1capti.png";

const ScrollingLogos = () => {
  const logos = [abs1L, absml, burjl, abs1l, pearlpl, pearlc1l, pealcaptl];

  return (
    <div className="relative">
      {/* Container just for the logos bar */}
      <div className="overflow-hidden w-[320px] py-4 bg-zinc-900/40 rounded-2xl mt-4">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-300%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
