const products = [
    { id: "101", name: "Product A", price: "$20" },
    { id: "102", name: "Product B", price: "$30" },
  ];
  
  // ✅ নতুন একটি কম্পোনেন্ট তৈরি করলাম
  const ProductItem = ({ product }) => {
    return (
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
      </div>
    );
  };
  
  export const ProductCard = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  