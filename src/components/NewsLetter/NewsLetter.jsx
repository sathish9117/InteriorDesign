import React from "react";

const NewsLetter = () => {
  return (
    <div className="border border-red-950 p-10">
      <h1 className=" text-3xl font-bold font-serif text-center">
        Subscribe to our Newsletter
      </h1>
      <p className=" max-w-[350px] mx-auto text-gray-700 text-center mt-5 text-md ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quae dolor
        inventore blanditiis dignissimos quisquam accusantium aperiam dolorum
        molestiae voluptas.
      </p>
      {/* from here */}
      <div className=" w-[60%] mx-auto mt-8 flex justify-center gap-3 border flex-wrap sm:flex-col">
        <input
          type="text"
          placeholder="Enter your email"
          className=" lg:w-[50%] md:w-[100%] sm:[100%] px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="lg:w-[20%] md:w-[100%] sm:w-[100%] bg-black px-6 py-4 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
