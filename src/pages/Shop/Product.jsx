import React, { useState } from "react";
import products from "../../utils/productitem"; // Imported product data
import ProductCard from "./ProductCard"; // Product card component
import Button from "./../../components/Button"; // (Unused but can be used for consistent button design)


// Main Product component

const Product = ({ headline }) => {
  // List of categories to filter products

  const Category = ["Chair", "Beds", "Sofa", "Lamp"];
  // State to track selected category

  const [selectedCategory, setSelectedCategory] = useState("Chair");
  // State to control how many products to show

  const [visibleProduct, setVisibleProduct] = useState(4);
  // Filter products based on selected category

  const filterProduct = products.filter(
    (product) => product.category === selectedCategory
  );
  // Load more products by increasing visible count

  const loadMoreProduct = () => {
    setVisibleProduct((prev) => prev + 4);
  };

  return (
    <div>
      <div className="container mx-auto">
        {/* Section headline */}

        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>
        {/* category selection tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {Category.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProduct(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-primary"
                    : "text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {filterProduct.slice(0, visibleProduct).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* load more btn */}
        {visibleProduct < filterProduct.length && (
          <div className="flex justify-center items-center py-6">
            <button
              onClick={loadMoreProduct}
              className="text-base font-semibold text-primary flex items-center gap-1 cursor-pointer"
            >
              View All
              <img src="/arrow.png" alt="btn icon" className="w-10" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
