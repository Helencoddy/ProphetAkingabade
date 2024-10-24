import React from "react";

export default function Button() {
  return (
    <div
      className="bg-blue-950 flex justify-center items-center md:w-[50%] w-full mx-auto h-60 md:rounded-md"
      style={{
        background:
          "linear-gradient(45deg, rgb(5, 1, 24), rgba(38, 13, 129, 0.7))",
      }}
    >
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-center md:w-[80%] w-full">
        <p className="text-2xl mt-4 flex-wrap md:flex-nowrap font-bold flex md:justify-center md:text-left text-center text-white md:w-[60%] w-full px-2 py-2">
          Embrace God&apos;s boundless love. Start your transformative journey.
        </p>
        <button className="text-white text-xl md:w-[40%] bg-blue-500 md:font-bold md:py-4 md:px-2 md:rounded-full rounded py-3 px-3 ">
          Receive Jesus
        </button>
      </div>
    </div>
  );
}
