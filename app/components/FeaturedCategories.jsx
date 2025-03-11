"use client";
import Image from "next/image";

const categories = [
  { name: "Electronics", image: "/images/electronics.jpg" },
  { name: "Fashion", image: "/images/fashion.jpg" },
  { name: "Home & Kitchen", image: "/images/home-kitchen.jpg" },
  { name: "Beauty & Health", image: "/images/beauty-health.jpg" },
];

const FeaturedCategories = () => {
  return (
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
  );
};

export default FeaturedCategories;
