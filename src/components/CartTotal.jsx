import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { getCartAmount, delivery_fee, currency } = useContext(shopContext);

  return (
    <div className="w-full text-xl sm:text-2xl ">
      <Title text1={"CART "} text2={"TOTAL"} />
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex justify-between text-base">
          <p>Subtotoall</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-base">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-base">
          <b>Total</b>
          <b>
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} .00
          </b>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
