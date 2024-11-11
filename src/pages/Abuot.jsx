import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
const Abuot = () => {
  return (
    <div className="border-t ">
      <div className="mt-8 text-2xl text-center ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mt-5 md:flex-row">
        <img
          src={assets.about_img}
          alt="aboutlogo"
          className="w-full md:max-w-[450px]"
        />
        <div className=" max-w-[800px] font-light text-sm">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="mt-4">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h1 className="my-5 text-base font-semibold">Our Mission</h1>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abuot;
