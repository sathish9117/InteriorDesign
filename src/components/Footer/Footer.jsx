import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* company info  section */}
          <div className=" space-y-4">
            <div className=" flex items-center space-x-3">
              <img src={Logo} alt="" className=" w-6" />
              <p className=" text-xl font-semibold">Interior</p>
            </div>
            <p>Greater Nodia, Uttar Pradesh, India</p>
            <p>@ 2024 SC All rights reserved</p>
          </div>
          {/* Footer Link  */}
          <div className=" grid grid-cols-2 gap-3">
            {/* About us */}
            <div className=" space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className=" text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainbility</a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div className=" space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className=" text-sm space-y-4">
                <li>
                  <a href="#">FAQ&apos;S</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className=" space-y-4">
            <h1 className=" text-xl font-semibold">Contact Us</h1>
            <ul className=" text-base font-semibold space-y-4">
              <li className=" flex items-center space-x-3">
                <FaPhone />
                <a href="#">+91 90001045678</a>
              </li>
              <li className=" flex items-center space-x-3">
                <FaMessage />
                <a href="mailto:contact.smarttech09117@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className=" text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &copy; 2023 SM. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
