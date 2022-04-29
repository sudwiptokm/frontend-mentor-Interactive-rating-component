import React, { useState } from "react";
import Image from "next/image";
import RatingComponent from "./RatingComponent";

export default function Card({ handleSubmit, selected, setSelected }: any) {
  return (
    <div className="max-w-[700px] max-h-[700px] rounded-[40px] bg-gray-800 m-5">
      <div className="md:px-14 md:py-16 p-10">
        {/* Star Icon */}
        <div className="bg-gray-700 inline md:p-7 p-3 rounded-full">
          <Image
            src={require(`../../public/icon-star.svg`)}
            alt="star icon"
          ></Image>
        </div>

        {/* Text */}
        <div className="mt-16">
          <p className="md:text-5xl text-2xl font-bold">How did we do?</p>
          <p className="md:text-2xl text-lg mt-8 text-gray-400">
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
          className="w-full mt-16 rounded-full bg-orange-500 flex justify-center md:py-6 py-4 md:text-3xl text-xl cursor-pointer hover:bg-white hover:text-orange-500"
        >
          <div className="">SUBMIT</div>
        </div>
      </div>
    </div>
  );
}
