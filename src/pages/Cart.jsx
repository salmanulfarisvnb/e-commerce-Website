import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Titile from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { ButtonBase, CartTotal } from "../components";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 ">
      <div className="mb-3 text-2xl">
        <Titile text1="YOUR" text2="Cart" />
      </div>
      <div>
        {cartData.map((item, i) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={i}
              className=" items-start grid grid-cols-[4fr_2fr_0.5fr] border-y py-4"
            >
              <div className="flex">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div className="mx-4 text-lg font-medium text-gray-700">
                  <h1>{productData.name}</h1>
                  <div className="flex items-center gap-5 mt-2 text-base ">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 py-1 bg-gray-100 border">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                onClick={(e) =>
                  e.target.value === 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="py-1 pl-2 border max-w-10 sm:max-w-20 sm:pl-3"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="mt-5 text-end max-sm:text-center">
            <div onClick={() => navigate("/place-order")}>
              <ButtonBase text={"PROCEED TO CHECKOUT"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
