import React from "react";
import Rating from "../../components/Rating";
import { FiPlus } from "react-icons/fi"; // Plus icon for the add-to-cart

// ProductCard component receives a single 'product' object as a prop

const ProductCard = ({ product }) => {
  return (
    <div>
      {/* Product image section */}

      <div className="bg-[#FAFAFA]">
        <img src={product.imageUrl} alt="" />
      </div>
      {/* Product details section */}

      <div className="p-6 bg-white shadow-sm">
        {/* Product category */}

        <h4 className="mb-1 text-base">{product.category}</h4>
        {/* Product name */}

        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        {/* Product rating using the Rating component */}

        <Rating rating={product.rating} />
        {/* Price and action button */}

        <div className="mt-5 flex justify-between items-center ">
          {/* Product price */}

          <p className="text-secondary font-bold text-lg">
            {" "}
            <sup>
              $ <span>{product.price}</span>
            </sup>
          </p>
          {/* Plus button could be used to add product to cart  */}

          <button className="bg-secondary text-white p-2 rounded-full hover:bg-black/65">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
