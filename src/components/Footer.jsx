import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
        <div>
          <img src={assets.logo} alt="" className="w-32 mb-5 " />
          <p className="w-full text-gray-600 md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. ;
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col to-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>PrivacyPolicy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col to-gray-600">
            <li>+9645551315</li>
            <li>contact For ever you</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024 forever.com - All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
