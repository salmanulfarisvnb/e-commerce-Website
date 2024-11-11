import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import ButtonBase from "../components/ButtonBase";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="border-t ">
      <div className="mt-6 text-2xl text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <img src={assets.contact_img} alt="" className="w-full sm:w-[500px]" />
        <div className="text-gray-700">
          <b className="text-lg">Our Store</b>
          <p>54709 Willms Station</p>
          <p>Suite 350, Washington, USA</p>
          <p className="mt-6 ">Tel: (415) 555-0132</p>
          <p className=" mb-7">Email: admin@forever.com</p>
          <b className="text-lg ">Carees at Forever</b>
          <p>Learn more about our teams and job openings.</p>
          <div className="mt-5 ">
            <ButtonBase text={"Explore Jobs"} />
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
