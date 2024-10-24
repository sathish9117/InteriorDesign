import React from "react";

const NewsLetter = () => {
  return (
    <div className=" p-10">
      <h1 className=" text-3xl font-bold font-serif text-center">
        Subscribe to our Newsletter
      </h1>
      <p className=" max-w-[350px] mx-auto text-gray-700 text-center mt-5 text-md ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quae dolor
        inventore blanditiis dignissimos quisquam accusantium aperiam dolorum
        molestiae voluptas.
      </p>
      {/* from here */}
      <div className="mx-auto mt-8 flex gap-1 flex-wrap lg:w-[60%] lg:flex-row lg:justify-center   md:w-[70%] sm:w-[100%]  sm:flex-col md:flex-col">
        <input
          type="text"
          placeholder="Enter your email"
          className=" lg:w-[50%]  lg:text-[21px] md:w-[100%] sm:[100%] px-4 py-2.5 ring-1 ring-gray-300"
        />
        <button className="lg:w-[20%] md:w-[100%] sm:w-[100%] bg-black px-6 py-2.5 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
