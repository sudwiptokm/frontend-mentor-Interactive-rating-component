import React, { useState } from "react";
import Image from "next/image";
import RatingComponent from "./RatingComponent";

export default function Card({ handleSubmit, selected, setSelected }: any) {
  return (
    <div className="sm:w-[400px] md:w-[700px] sm:h-[400px] md:h-[700px] rounded-[40px] bg-gray-800">
      <div className="px-14 py-16">
        {/* Star Icon */}
        <div className="bg-gray-700 inline p-7 rounded-full">
          <Image
            src={require(`../../public/icon-star.svg`)}
            alt="star icon"
          ></Image>
        </div>

        {/* Text */}
        <div className="mt-16">
          <p className="text-5xl font-bold">How did we do?</p>
          <p className="text-2xl mt-8 text-gray-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>

        {/* Rating Component */}
        <div className="mt-20">
          <RatingComponent selected={selected} changeSelect={setSelected} />
        </div>

        {/* Submit Button */}
        <div
          onClick={() => handleSubmit(false)}
          className="w-full mt-16 rounded-full bg-orange-500 flex justify-center py-6 text-3xl cursor-pointer hover:bg-white hover:text-orange-500"
        >
          <div className="">SUBMIT</div>
        </div>
      </div>
    </div>
  );
}
