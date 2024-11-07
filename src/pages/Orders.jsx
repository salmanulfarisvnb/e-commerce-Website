import React, { useContext } from "react";
import { Title } from "../components";
import { shopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(shopContext);

  return (
    <div className="border-t mt-7 ">
      <div className="mt-10 text-lg sm:text-xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(0, 4).map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between w-full gap-3 py-4 max-sm:flex-col border-y"
          >
            <div className="flex flex-1 ">
              <img className="w-20" src={item.image[0]} alt="image" />
              <div className="flex flex-col ml-5 text-sm ">
                <p>{item.name}</p>
                <div className="flex gap-2 text-sm text-gray-600">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size:M</p>
                </div>
                <p className="mt-1 text-sm">
                  Date: <span className="text-gray-400 ">25.jul.2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <div className="flex items-center justify-center gap-2 ">
                <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                <p>Ready to ship</p>
              </div>
            </div>
            <div className="text-sm ">
              <button className="px-3 py-2 border">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
