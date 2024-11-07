import React, { useContext } from "react";
import { Title } from "../components";
import { shopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(shopContext);
  return (
    <div className="mt-5 border-t">
      <div className="mt-10 text-lg sm:text-xl">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      <div>
        {products.map((item, i) => {
          <h1 key={i}>{item.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default Orders;
