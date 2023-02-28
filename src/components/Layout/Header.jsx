import React from "react";
import headerImg from "../../assets/headerImg.png";
import HeaderBtn from "./HeaderBtn";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-[100%] h-20 bg-[#b55c6b] text-white flex justify-between align-middle content-center flex-wrap text-center px-[10%] z-10 shadow-sm shadow-pink-300">
        <h1 className="pt-2">ReactMeals</h1>
        <HeaderBtn onClick={props.openCartHandler} />
      </header>
      <div className="w-[100%] h-80 z-0 overflow-hidden">
        <img
          src={headerImg}
          alt="meals"
          className="w-[110%] h-[100%] object-cover translate-y-12
          "
        />
      </div>
    </>
  );
};

export default Header;
