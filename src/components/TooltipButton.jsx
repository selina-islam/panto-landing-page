import React from "react";

const TooltipButton = ({
  position = "bottom",
  colors = ["bg-red-700", "bg-green-700", "bg-blue-700"],
}) => {
  // Define tooltip and arrow positions based on the "position" prop

  const positionClasss = {
    bottom: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
      arrow: "left-1/2 transform -translate-x-1/2 -bottom-2 border-1",
    },
    top: {
      tooltip: "top-full left-1/2 transform -translate-x-1/2 mt-3",
      arrow: "left-1/2 transform -translate-x-1/2 -top-2 border-b",
    },
  };
  return (
    <div className="relative group">
      {/* Main button */}
      <button className="relative p-4 bg-white/25 rounded-full border-1 border-white/50">
        {/* Tooltip - appears on hover */}

        <div
          className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex ${positionClasss[position].tooltip}`}
        >
          {/* Render color boxes dynamically from colors prop */}
          {colors.map((color, index) => {
            <div className={`size-6 ${color}`} key={index}>
              {" "}
            </div>;
          })}
          <div className="size-6 bg-red-700 border-white rounded-full" />
          <div className="size-6 bg-green-700 border-white rounded-full" />
          <div className="size-6 bg-blue-700 border-white rounded-full" />
          {/* tooltip arrow */}
          <div
            className={`absolute ${positionClasss[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}
          />
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
