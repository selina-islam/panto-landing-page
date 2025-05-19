import React from "react";

// Reusable Button component with text and icon
const Button = ({ text }) => {
  return (
    // Button container with small text, primary color, flex layout, and cursor pointer

    <button className="text-sm text-primary flex items-center gap-1 cursor-pointer">
      {/* Display the passed button text */}

      {text}
      {/* Arrow icon image next to the text */}

      <img src="/arrow.png" alt="btn icon" className="w-10" />
    </button>
  );
};

export default Button;
