import React, { useState } from "react";

const val = 5;

export default function RatingComponent({ selected, changeSelect }: any) {
  return (
    <div>
      <div className="flex justify-between">
        {[...Array(val)].map((x, idx) => (
          <div
            key={idx}
            className={`${
              selected === idx + 1 ? "bg-gray-400" : "bg-gray-700"
            } md:w-20 md:h-20 w-12 h-12 flex justify-center items-center rounded-full hover:bg-orange-500 cursor-pointer`}
            onClick={() => changeSelect(idx + 1)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
