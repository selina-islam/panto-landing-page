import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Rating component receives 'rating' as a prop

const Rating = ({ rating }) => {
  const totalStar = 5; // Total number of stars to display

  return (
    <div className="flex px-1">
      {/* Create an array of 5 elements and render stars based on rating */}

      {Array.from({ length: totalStar }, (_, index) => {
        const starIndex = index + 1; // Convert index (0-based) to 1-based star number

        // If the star index is less than or equal to rating, show filled star
        // Otherwise, show outlined star
        return starIndex <= rating ? (
          <AiFillStar key={index} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default Rating;
