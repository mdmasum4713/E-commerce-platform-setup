"use client";
import Image from "next/image";
import { FaBullseye, FaLightbulb, FaComments, FaLock } from "react-icons/fa";

const categories = [
  { name: "Electronics", image: "https://i.postimg.cc/TPrMTSRY/gettyimages-166103292-612x612.jpg" },
  { name: "Fashion", image: "https://i.postimg.cc/bvXfc8fB/istockphoto-1363588189-612x612.jpg" },
  { name: "Home & Kitchen", image: "https://i.postimg.cc/gJm9jDJy/photo-1556911220-bff31c812dba.jpg" },
  { name: "Beauty & Health", image: "https://i.postimg.cc/g2LbTjQh/pngtree-red-dress-wedding-girl-fashion-hand-drawn-elements-png-image-1691909.jpg" },
];

const FeaturedCategories = () => {
  return (
 <div>
     <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((category, index) => (
          <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-semibold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div>
     {/* Header Section */}
     <div className="bg-black py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block border border-gray-300 rounded-full text-white px-4 py-2 mb-6 md:mb-8">
            <span className="text-lg md:text-xl">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6">
            Magic Behind Our IT Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mx-auto max-w-2xl">
            We begin by conducting a comprehensive needs assessment to understand
            your specific requirements, challenges, and goals.
          </p>
        </div>
      </div>

      {/* Layout with Left, Center Image, and Right Side Text */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
        {/* Left Side Text */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {[
            { title: "Technical Expertise", icon: <FaBullseye />, desc: "A reputable IT company should possess a high level of technical expertise." },
            { title: "Innovation & Adaptability", icon: <FaLightbulb />, desc: "A reputable IT company should possess a high level of technical expertise." }
          ].map((item, index) => (
            <div key={index} className="border border-[#a502a8] hover:border-[#210968] p-4 md:p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
                <p className="text-sm md:text-base">{item.desc}</p>
              </div>
              <div className="text-[#a502a8] text-4xl md:text-5xl">{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="https://i.postimg.cc/fRpw50tJ/image14.jpg"
            alt="IT Solutions"
            width={350}
            height={350}
            className="rounded-lg w-4/5 sm:w-3/5 md:w-full max-w-xs md:max-w-none"
          />
        </div>

        {/* Right Side Text */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {[
            { title: "Effective Communication", icon: <FaComments />, desc: "A reputable IT company should possess a high level of technical expertise." },
            { title: "Security And Compliance", icon: <FaLock />, desc: "An IT company must prioritize cybersecurity and data protection." }
          ].map((item, index) => (
            <div key={index} className="border border-[#a502a8] hover:border-[#210968] p-4 md:p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
                <p className="text-sm md:text-base">{item.desc}</p>
              </div>
              <div className="text-[#a502a8] text-4xl md:text-5xl">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
 </div>
  );
};

export default FeaturedCategories;
