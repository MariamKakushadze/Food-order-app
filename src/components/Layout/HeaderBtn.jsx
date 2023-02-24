import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderBtn = (props) => {
  return (
    <button className="border-none cursor-pointer text-white flex justify-around align-middle rounded-[25px] font-bold py-2 px-8 bg-red-300 hover:bg-[#ac6f79] active:bg-[#ac6f79]">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b55c6b] ml-2 px-2 rounded-full font-bold hover:bg-red-300 active:bg-red-300">
        3
      </span>
    </button>
  );
};

export default HeaderBtn;
