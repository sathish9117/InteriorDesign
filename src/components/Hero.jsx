import React from "react";
import HeroPng from "./assets/images/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "./animate";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] gap-10">
          {/* Text section */}
          <div className="flex flex-col text-center justify-center gap-5 md:pr-8 md:text-left pt-20 md:pt-0 lg:pr-14">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className=" text-3xl font-bold"
            >
              SKETCH LUXURY INTERIOR DESIGN
            </motion.h1>
            <p className=" text-sm text-gray-500">
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget.
            </p>
            <div className=" space-x-4">
              <button className=" primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] hover:bg-white hover:text-black">
                Get Started
              </button>
              <button className=" primary-btn uppercase">Contact Us</button>
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={HeroPng}
              alt=""
              className=" w-[80%] md:w-[300px] object-cover md:scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
