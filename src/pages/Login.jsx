import React, { useState } from "react";
import { ButtonBase } from "../components";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col w-[90%] m-auto items-center mt-10 "
    >
      <div className="flex items-center gap-2 mb-5 ">
        <p className="font-mono text-3xl">{currentState}</p>
        <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <div className="flex flex-col w-[420px] md:w-[440px] gap-4 ">
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="py-2 text-sm border border-gray-600 "
            type="text"
            placeholder=" Enter Your Name"
          />
        )}
        <input
          className="px-3 py-2 text-sm border border-gray-600 "
          type="email"
          placeholder=" Email"
        />
        <input
          className="px-3 py-2 text-sm border border-gray-600 "
          type="password"
          placeholder=" Password"
        />
        <div className="flex justify-between mt-[-10px] text-sm text-gray-600">
          <p className="text-xs cursor-pointer">forgot Password</p>
          {currentState === "Sign Up" ? (
            <p
              onClick={() => setCurrentState("Login")}
              className="text-xs cursor-pointer "
            >
              Login Here
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="text-xs cursor-pointer "
            >
              Create accoutn
            </p>
          )}
        </div>
      </div>
      <div className="">
        <ButtonBase
          text={currentState === "Login" ? "Sign In" : "Sign Up"}
          width={"150px"}
        />
      </div>
    </form>
  );
};

export default Login;
