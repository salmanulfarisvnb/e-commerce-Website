import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-500 "> We Offer hasile free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 Day retur policy</p>
        <p className="text-gray-500 "> We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-500 "> we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
