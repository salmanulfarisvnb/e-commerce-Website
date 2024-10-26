import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RealatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [related, setRealated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.filter((item) => category === item.category);
      productCopy = products.filter((item) => subCategory === item.subCategory);
      setRealated(productCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-20 ">
      <div className="text-3xl text-center ">
        <Title text1="RELATED" text2="PRODUCTS" />
        <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {related.map((item, i) => (
            <ProductItem
              key={i}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealatedProduct;
