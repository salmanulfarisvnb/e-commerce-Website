import React, { useContext, useState } from "react";
import { ButtonBase, CartTotal, Title } from "../components";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(shopContext);
  return (
    <div className="flex flex-col justify-between gap-5 pt-5 md:flex-row sm:pt-14">
      {/* .............Left  section ................. */}

      <div className="flex flex-col gap-5 w-[450px] ">
        <div className="text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full px-3 py-2 border"
          type="email"
          required
          placeholder="Enter Email Address "
        />
        <input
          className="w-full px-3 py-2 border"
          type="text"
          placeholder="Street "
        />
        <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="Zipcode"
          />
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="country"
          />
        </div>
        <input
          className="w-full px-3 py-2 border"
          type="tel"
          placeholder="Phone "
        />
      </div>
      {/* .................Right Section............. */}
      <div>
        <div className=" min-w-80">
          <CartTotal />
        </div>
        <div className="mt-8 text-base sm:text-lg ">
          <Title text1={"PAMENT"} text2={"METHOD"} />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-2 xl:grid-cols-2">
          <div
            onClick={() => setMethod("spm")}
            className="flex items-center justify-start px-5 py-2 border cursor-pointer max-sm:w-1/2 gap-x-6"
          >
            <p
              className={` min-w-3.5 ${
                method === "spm" ? "bg-green-500" : ""
              } h-3.5 border rounded-full`}
            ></p>
            <img className="h-5 " src={assets.stripe_logo} alt="" />
          </div>
          <div
            onClick={() => setMethod("rpm")}
            className="flex items-center justify-start px-5 py-2 border cursor-pointer max-sm:w-1/2 gap-x-6"
          >
            <p
              className={` min-w-3.5 ${
                method === "rpm" ? "bg-green-500" : ""
              } h-3.5 border rounded-full`}
            ></p>
            <img className="h-5 " src={assets.razorpay_logo} alt="" />
          </div>
          <div
            onClick={() => setMethod("cod")}
            className="flex items-center justify-start px-5 py-2 border cursor-pointer max-sm:w-1/2 gap-x-6"
          >
            <p
              className={` min-w-3.5 ${
                method === "cod" ? "bg-green-500" : ""
              } h-3.5 border rounded-full`}
            ></p>
            <p className="h-5 text-gray-600 ">CASH ON DELIVERY</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/orders")}
          className="flex mt-5 xl:justify-center"
        >
          <ButtonBase text={"PLACE ORDER"} />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
