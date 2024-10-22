import React from "react";
import Logo from "../../assets/logo.png";

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Pojects",
    link: "#",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" container py-4 flex justify-between items-center flex-wrap">
        {/* Logo Section */}
        <div className=" flex items-center gap-3">
          <img src={Logo} alt="logo" className=" w-10" />
          <span className=" text-2xl font-bold">Interior</span>
        </div>
        {/* Link Section */}
        <div className=" hidden md:block">
          {NavLinks.map((link) => {
            return (
              <a
                key={""}
                href={link.link}
                className="mx-4 text-sm font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button Section */}
        <div className=" ">
          <button className="primary-btn">Try For Free</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
