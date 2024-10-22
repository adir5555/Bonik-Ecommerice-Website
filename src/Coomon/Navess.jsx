import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import image from "../assets/d2.png";
import { MdOutlineMenu } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import "./Fooerss/Header.css";
import logo from "../../images/logo.png";
import {
  PiHeadphonesLight,
  PiShoppingCartThin,
  PiUserCircleThin,
} from "react-icons/pi";

const Navess = ({ handleInputChange, query }) => {
  const [visible, setVisiable] = useState(false);

  const [showMenuButton, setShowMenuButton] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowMenuButton(true); // Show menu button when scrolled
    } else {
      setShowMenuButton(false); // Hide menu button when at top
    }
  };

  // useEffect to attach and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false); // Track visibility of content

  // Function to handle button click and toggle visibility
  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle the state
  };

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 10);
  });

  const SerchOPtion = (
    <>
      <select className="border-r-2 mr-4 text-gray-800 bg-white">
        <option disabled selected>
          All Categories
        </option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div className="">
        <input
          type="text"
          className=" text-black search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for products ..."
        />
      </div>
    </>
  );
  const navUserHober = (
    <>
      <NavLink
        onClick={() => setVisiable(false)}
        className=" pl-6  uppercase"
        to="/"
      >
        Home
      </NavLink>
      <hr />
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6  uppercase"
        to="/womendress"
      >
        womendress
      </NavLink>
      <hr />
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 uppercase"
        to="/womentop"
      >
        womentop
      </NavLink>
      <hr />
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6  uppercase"
        to="/menshirt"
      >
        Menshirt
      </NavLink>
      <hr />
    </>
  );
  const navOption = (
    <>
      <NavLink to="/" className="flex flex-col items-center gap-1">
        <p className="hover:text-indigo-500/75">Home</p>
      </NavLink>
      <NavLink to="/womendress" className="flex flex-col items-center gap-1">
        <p className="hover:text-indigo-500/75">womendress</p>
      </NavLink>
      <NavLink to="/womentop" className="flex flex-col items-center gap-1">
        <p className="hover:text-indigo-500/75">womentop</p>
      </NavLink>
      <NavLink to="/menshirt" className="flex flex-col items-center gap-1">
        <p className="hover:text-indigo-500/75">menshirt</p>
      </NavLink>
    </>
  );

  const ShowValue = (
    <>
      <div className="navbar hidden sm:flex sm:px-28  ">
        <div className="navbar-start ">
          <div className="flex items-center gap-2 ">
            <div className="group  ">
              <div className="flex items-center  hover:text-indigo-500/75 ">
                <MdOutlineMenu className="text-xl  mr-2 cursor-pointer"></MdOutlineMenu>
                <h1 className="text-xl hidden lg:flex  uppercase prata-regular">
                  Shop Categories
                </h1>
              </div>

              <div className="group-hover:block hidden absolute dropdown-menu  pt-5 z-10">
                <div className="flex flex-col border border-indigo-600 gap-2 w-44 py-3 text-xl px-5  bg-slate-200 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Smartphone
                  </p>
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Headphones
                  </p>
                  <p className="cursor-pointer hover:text-[#082cbd]">Tablets</p>
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Smart Watch
                  </p>
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Speakers
                  </p>
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Tech Gift
                  </p>
                  <p className="cursor-pointer hover:text-[#082cbd]">
                    Camcorders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center ">
          <ul className="menu menu-horizontal  gap-5 text-xl uppercase ">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end hidden md:flex gap-4">
          <div className="">
            <img className="w-10" src={image} alt="" />
          </div>

          <div className="items-center gap-4 sm:flex  ">
            <div className="flex">
              <GiSelfLove className="text-3xl hover:text-indigo-500/75"></GiSelfLove>
              <p className="rounded-full bg-sky-500 text-white badge-sm  ">1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="">
      {/* 2 Search */}

      <div className="search p-2 lg:px-28 bg=[#fff] ">
        <div className="navbar  ">
          <div className="navbar-start">
            <img className="w-36 " src={logo} alt="" />
          </div>
          <div className="navbar-center">
            <label className="sm:flex hidden border-2 border-indigo-500/75  input  items-center">
              {SerchOPtion}
            </label>
          </div>
          <div className="navbar-end ">
            <div className=" flex items-center gap-3  ">
              <div className="items-center gap-2 sm:flex  hover:text-indigo-500/75">
                <div className=" ">
                  <PiHeadphonesLight className="text-3xl  cursor-pointer"></PiHeadphonesLight>
                </div>
                <div className=" text-xs hidden lg:flex">
                  <h3 className=" font-bold">
                    <small className=" ">Need Help</small> <br /> 01571583626
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 hover:text-indigo-500/75">
                <div className="relative">
                  <p className="absolute right-[-6px] w-4 text-center leading-4 bg-sky-500 text-white aspect-square rounded-full text-[10px]">
                    10
                  </p>

                  <PiShoppingCartThin className="text-3xl "></PiShoppingCartThin>
                </div>
                <div className=" text-xs hidden lg:flex">
                  <h3 className=" font-bold">
                    <small className=" "></small> <br /> $0.10
                  </h3>
                </div>
              </div>

              <div className="hover:text-indigo-500/75  items-center gap-2 sm:flex">
                <PiUserCircleThin className=" text-3xl "></PiUserCircleThin>
                <div className=" text-xs hidden lg:flex">
                  <h3 className=" font-bold">
                    <small className=" ">Login</small> <br /> Account
                  </h3>
                </div>
              </div>

              <button className="" onClick={() => setVisiable(true)}>
                <BiMenuAltRight className="text-3xl hover:text-indigo-500/75 cursor-pointer sm:hidden"></BiMenuAltRight>
              </button>
              {/*   */}
              <div className="container hidden sm:flex">
                <button className="" onClick={handleClick}>
                  {showMenuButton && (
                    <MdOutlineMenu className="hover:text-indigo-500/75 -mt-14 text-3xl"></MdOutlineMenu>
                  )}
                </button>

                {isVisible && (
                  <div className="full-display">
                    <hr className="w-full border-none h-[1.1px] bg-gray-500 " />
                    {ShowValue}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`absolute top-0 right-0 overflow-hidden bg-slate-100 transition-all ${
              visible ? "w-full" : "w-0"
            } `}
          >
            <div className="flex flex-col text-black">
              <div
                onClick={() => setVisiable(false)}
                className=" flex items-center gap-4 p-3"
              >
                <GoArrowLeft className="h-4 rotate-180 text-3xl"></GoArrowLeft>
                <p>Back</p>
              </div>
              {navUserHober}
            </div>
          </div>
        </div>
        <hr className="w-full lg:hidden border-none h-[1.1px] bg-gray-500 " />

        <div className="flex sm:hidden mt-3  input input-bordered items-center ">
          {SerchOPtion}
        </div>
      </div>
      <hr className="w-full border-none h-[1.1px] bg-gray-500 " />

      {/* 3 NavBer */}

      <div className="">{ShowValue}</div>

      {/* 4 Shop */}
      <div>

     
        <h2 className="text-3xl text-base-content bg-gray-100  text-center font-medium p-4 uppercase"></h2>
      </div>
    </div>
  );
};

export default Navess;
