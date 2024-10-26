import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);

  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);

    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10 ">
      <div className="py-8 text-3xl text-center ">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          molestias sed culpa atque sequi, minima, esse corporis .
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
