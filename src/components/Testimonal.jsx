import React from "react";
import { FcRating } from "react-icons/fc";

const TestimonalData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "John is a software developer with 10 years of experience in web development.John is a software developer with 10 years of experience in web development.John is a software developer with 10 years of experience in web development.John is a software developer with 10 years of experience in web development.John is a software developer with 10 years of experience in web development.John is a software developer with 10 years of experience in web development.",
  },
  {
    id: 2,
    name: "Jane",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.Jane is a graphic designer who specializes in brand identity and illustrations.",
  },
  {
    id: 3,
    name: "Robert",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "Robert is a project manager with expertise in agile methodologies and team coordination.Robert is a project manager with expertise in agile methodologies and team coordination.Robert is a project manager with expertise in agile methodologies and team coordination.Robert is a project manager with expertise in agile methodologies and team coordination.Robert is a project manager with expertise in agile methodologies and team coordination.",
  },
];

const Testimonal = () => {
  return (
    <div className=" py-14 ">
      {/* header text */}
      <div className=" space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <h1 className=" text-4xl font-bold font-serif">
          Words for our customers
        </h1>
        <p className=" text-gray-500 text-sm max-w-[350px] mx-auto">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      {/* Testmonial cards */}
      <div className=" flex flex-wrap justify-center bg-black p-12">
        <div className="  flex flex-wrap md:justify-center lg:grid-cols-3 md:grid-cols-2 sm:w-[75%] gap-2">
          {TestimonalData.map((card) => {
            return (
              <div
                key={card.id}
                className=" lg:w-[350px] md:w-[255px] border-[1px] border-gray-500 p-5 text-white group hover:bg-white overflow-hidden "
              >
                {/* Upper section */}
                <div className=" flex flex-row items-center gap-5  ">
                  <img
                    src={card.img}
                    alt=""
                    className=" w-[60px] rounded-full"
                  />
                  <div className=" space-y-1">
                    <p className=" text-sm font-bold group-hover:text-black ">
                      {card.name}
                    </p>
                    <p className=" text-gray-400 text-xs group-hover:text-black ">
                      {card.designation}
                    </p>
                    <div className=" md:w-[100px] flex space-x-1 mt-2 ">
                      <FcRating />
                      <FcRating />
                      <FcRating />
                      <FcRating />
                      <FcRating />
                    </div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className=" mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className=" md:line-clamp-4 text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
