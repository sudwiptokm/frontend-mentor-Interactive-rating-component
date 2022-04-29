/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function Confirmation({ rating }: any) {
  return (
    <div className="max-w-[700px] max-h-[700px] rounded-[40px] bg-gray-800 m-5">
      <div className="px-14 py-28">
        <div className="flex justify-center items-center flex-col">
          <Image src={require(`../../public/ty.svg`)} alt="thank you"></Image>
          <div className="mt-16">
            <p className="bg-gray-700 text-orange-400 font-bold px-7 py-2 text-sm md:text-lg rounded-full">
              You Selected {rating} out of 5
            </p>
          </div>
          <div className="mt-16">
            <p className="md:text-4xl font-bold text-2xl"> Thank you!</p>
          </div>
          <div className="mt-10">
            <p className="md:text-2xl text-lg text-gray-400 text-center">
              We appreciate you taking time to give a rating.
              <br />
              If you ever need more support, don't hesitate to get in touch!
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
