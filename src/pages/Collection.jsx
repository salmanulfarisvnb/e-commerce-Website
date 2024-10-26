import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggileSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    const fpCopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10">
      {/* Filter Option */}

      <div className=" min-w-60">
        <p className="flex items-center gap-2 my-2 text-xl cursor-pointer ">
          FILTER
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`w-2 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            c
            alt="icon"
          />
        </p>
        {/* Catogory Filter */}

        <div className={`${showFilter ? "hemsue " : " max-sm:hidden"}`}>
          <div className="py-3 pl-5 mt-6 border border-gray-300">
            <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light to-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />{" "}
                Kids
              </p>
            </div>
          </div>

          {/* Sub CATOGORY */}

          <div className="py-3 pl-5 mt-6 border border-gray-300">
            <p className="mb-3 text-sm font-medium ">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light to-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggileSubCategory}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Botemwear"}
                  onChange={toggileSubCategory}
                />{" "}
                Botemwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggileSubCategory}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className="flex-1 ">
        <div className="flex items-center justify-between mb-4 text-base sm:text-2xl">
          <Title text1="ALL" text2="COLECTIONS" />

          {/* Product Sort */}

          <select
            onChange={(e) => setSortType(e.target.value)}
            name="sort"
            id="colection_sort"
            className="px-2 py-3 text-sm border-2 border-gray-300"
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Product */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 ">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
