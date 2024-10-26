import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ButtonBase from "../components/ButtonBase";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fethProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(productData.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fethProductData();
  }, [productId, products, productData]);

  return productData ? (
    <div className="pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100">
      {/* --------Product Data --------*/}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* ---------Product Images--------- */}

        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, i) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={i}
                className=" w-[24%] sm:w-full  sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className=" w-full sm:w-[80%]">
            <img className="w-full h-auto " src={image} alt="" />
          </div>
        </div>

        {/* ---------Product Info----------- */}

        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium ">{productData.name} </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2 ">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency} {productData.price}
          </p>
          <p className="w-4/5 mt-4 text-base text-gray-500">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 py-8">
            <p>Select Size</p>
            <div className="flex gap-x-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`px-4 py-2 bg-gray-100 border ${
                    item === size ? "border-orange-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <ButtonBase text="ADD TO CART" />
          <hr className="w-4/5 mt-8" />
          <div className="py-8 text-sm text-gray-500">
            <p>100% Original Product</p>
            <p>Easy return and exchange policy within 7 days</p>
            <p>Cash on delivery available on this product </p>
          </div>
        </div>
      </div>
      {/* --------Display Realated Product-------- */}
    </div>
  ) : (
    <div className="opacity-0 "></div>
  );
};

export default Product;
