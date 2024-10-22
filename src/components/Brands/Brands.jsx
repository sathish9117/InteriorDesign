import React from "react";
import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";
const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className=" flex flex-wrap border border-black justify-center lg:justify-evenly gap-6">
          <img src={Brand1} alt="brand" className=" w-[130px]" />
          <img src={Brand2} alt="brand" className=" w-[130px]" />
          <img src={Brand3} alt="brand" className=" w-[130px]" />
          <img src={Brand4} alt="brand" className=" w-[130px]" />
          <img src={Brand5} alt="brand" className=" w-[130px]" />
        </div>
      </div>
    </>
  );
};

export default Brands;
