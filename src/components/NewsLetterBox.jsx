import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="pb-10 text-center ">
      <p className="text-2xl font-medium">Subscribe Now and 20% Offers</p>
      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        cupiditate earum nam illo
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex items-center mx-auto mt-6 border sm:w-1/2"
      >
        <input
          id="email"
          autoComplete="slaman"
          className="w-full pl-2 outline-none sm:flex-1"
          type="email"
          placeholder="Enter Your Email "
          required
        />
        <button
          type="submit"
          id="email_button"
          className="px-4 py-3 text-white bg-black text-sx e"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
