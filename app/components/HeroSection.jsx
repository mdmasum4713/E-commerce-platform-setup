"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center mt-2">
      <div className="max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Exclusive Deals for Small Businesses
        </motion.h1>
        <p className="text-lg md:text-xl opacity-80 mb-6">
          Shop premium products with fast & secure payment options.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;