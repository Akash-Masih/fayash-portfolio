import React from "react";
import { motion } from "framer-motion";

// Import service images
import b1 from "./assets/1bed.jpg";
import b2 from "./assets/2bed.jpg";
import b3 from "./assets/3bed.jpg";
import b4 from "./assets/4bed.jpg";
import pent from "./assets/penthouse.jpg";
import com from "./assets/commercial.jpg";

const services = [
  { title: "1 Bed Apartment", image: b1, desc: "Perfect for singles or couples seeking cozy, modern living." },
  { title: "2 Bed Apartment", image: b2, desc: "Ideal for small families with stylish interiors." },
  { title: "3 Bed Apartment", image: b3, desc: "Spacious and functional for growing families." },
  { title: "4 Bed Apartment", image: b4, desc: "Premium space and comfort for large families." },
  { title: "Penthouse", image: pent, desc: "Top-floor luxury with stunning views and private terraces." },
  { title: "Commercial Units", image: com, desc: "Prime business locations for offices or retail shops." },
];

const ServiceCard = ({ title, image, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-zinc-800/90 p-0 rounded-xl shadow-2xl overflow-hidden transform hover:shadow-yellow-400 hover:z-10 cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
    <div className="p-4">
      <h4 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{desc}</p>
      <a
        href="/#contact"
        className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Want Service
      </a>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <main className="min-h-screen px-6 py-20 bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-12 border-b border-yellow-500 pb-4">
        Our Services
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((unit, index) => (
          <ServiceCard key={index} {...unit} />
        ))}
      </div>
    </main>
  );
};

export default Services;
