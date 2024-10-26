import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <Link to={`/product/${id}`} className="px-2 text-gray-700 cursor-pointer ">
      <div className="overflow-hidden ">
        <img
          src={image[0]}
          className="transition ease-out hover:scale-110"
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium ">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
