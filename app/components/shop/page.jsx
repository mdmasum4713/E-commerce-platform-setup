import ProductCard from "@/components/ProductCard";

const products = [
  { id: "101", name: "Product A", price: "$20" },
  { id: "102", name: "Product B", price: "$30" },
];

export default function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
