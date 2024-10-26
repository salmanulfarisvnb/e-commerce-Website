import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";

const RealatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [related, setRealated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.filter((item) => category === item.category);
      productCopy = products.filter((item) => subCategory === item.category);
    }
  }, []);
  return <div>RealatedProduct</div>;
};

export default RealatedProduct;
