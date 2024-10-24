import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const ServicesCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, necessitatibus.",
    icon: <FaVectorSquare />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    desc: "Lorem ipsum dolor sit, amet consecteturLorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, necessitatibus.",
    icon: <FaPenToSquare />,
    link: "#",
  },
  {
    id: 3,
    title: "Afforable Price",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, necessitatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, necessitatibus.",
    icon: <BiSolidDollarCircle />,
    link: "#",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className=" space-y-3 text-center max-w-[350px] mx-auto mb-8">
          <h1 className=" text-3xl font-bold font-serif">What we provide</h1>
          <p className=" text-gray-500 text-sm">
            Bring your dream home to life with one-o-one design help & hand
            picked products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card section */}
          {ServicesCard.map((card) => {
            return (
              <div
                className=" space-y-4 border-[1px]  border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                key={card.id}
              >
                <span className=" inline-block text-xl border-[1px] border-black rounded-full p-4">
                  {card.icon}
                </span>
                <p className=" text-2xl font-bold font-serif">{card.title}</p>
                <p className=" text-gray-400 text-xs">{card.desc}</p>
                <a
                  href={card.link}
                  className=" inline-block border-b border-black "
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
