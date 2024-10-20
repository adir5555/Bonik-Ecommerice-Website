import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import image from "../assets/d2.png";
import { MdOutlineMenu } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import "./Fooerss/Header.css";



const Navess = ({ handleInputChange, query }) => {
  const [visible, setVisiable] = useState(false);
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
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
        className="py-2 pl-6 border"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/collection"
      >
        Collection
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
  const navOption = (
    <>
      <NavLink to="/" className="flex flex-col items-center gap-1">
        <p className="hover:text-cyan-200">Home</p>
      </NavLink>
      <NavLink to="/womendress" className="flex flex-col items-center gap-1">
        <p className="hover:text-cyan-200">womendress</p>
      </NavLink>
      <NavLink to="/womentop" className="flex flex-col items-center gap-1">
        <p className="hover:text-cyan-200">womentop</p>
      </NavLink>
      <NavLink to="/menshirt" className="flex flex-col items-center gap-1">
        <p className="hover:text-cyan-200">menshirt</p>
      </NavLink>
    </>
  );
  return (
    <div className="">
      {/* 1 Head */}
      <div className="bg-[#263c97] sm:px-28">
        <div className="navbar text-white ">
          <div className="flex-1 ">
            <div className="flex gap-2">
              <select className="bg-[#263c97] ">
                <option>English</option>
                <option>Kalaallisut</option>
                <option>Hunsrik Jingpo</option>
                <option>Hunsrik Jingpo</option>
                <option>Hunsrik Javanese</option>
                <option>Hunsrik Italian</option>
                <option>Iban check</option>
                <option>Hindi</option>
              </select>
              <select className="bg-[#263c97] ">
                <option>United Staide(USD $)</option>
                <option>Japanij(DGP $)</option>
                <option>Canada(CAD $)</option>
                <option>United Staide(USD $)</option>
              </select>
              <h1 className="lg:flex hidden ">Need Help? +088 15713845</h1>
            </div>
          </div>
          <div className="flex-none">
            <ul className=" items-center sm:flex hidden   gap-3">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Order Tracking</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Fags</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full border-none h-[1.1px] bg-gray-500 " />

      {/* 2 Search */}

      <div className="bg-[#263c97] p-2 lg:px-28 text-white">
        <div className="navbar ">
          <button className="" onClick={() => setVisiable(true)}>
            <BiMenuAltRight className="text-3xl text-white cursor-pointer sm:hidden"></BiMenuAltRight>
          </button>
          <div className="navbar-start ">
            <h1 className="text-3xl text-white uppercase   roboto-medium-italic prata-regular ">
              Sarker shop
            </h1>
          </div>
          <div className="navbar-center">
            <label className="sm:flex hidden input input-bordered items-center">
              {SerchOPtion}
            </label>
          </div>
          <div className="navbar-end ">
            <div className=" flex items-center gap-5  ">
              <div className="items-center gap-4 sm:flex hidden ">
                <div className="relative ">
                  <p className="absolute right-[-10px] w-4 text-center leading-4 bg-sky-500 text-white aspect-square rounded-full text-[10px]">
                    1
                  </p>
                  <GiSelfLove className="text-3xl text-white cursor-pointer"></GiSelfLove>
                </div>
                <div className=" text-xs hidden lg:flex">
                  <h3 className="text-white font-bold">
                    <small className="text-gray-300 ">Favorite</small> <br /> My
                    Wishlist
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <p className="absolute right-[-6px] w-4 text-center leading-4 bg-sky-500 text-white aspect-square rounded-full text-[10px]">
                    10
                  </p>
                  <FiShoppingCart className="text-3xl text-white"></FiShoppingCart>
                </div>
                <div className=" text-xs hidden lg:flex">
                  <h3 className="text-white font-bold">
                    <small className="text-gray-300 ">You Cart</small> <br />{" "}
                    $0.00
                  </h3>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 ">
                <FaRegUserCircle className="text-white text-3xl"></FaRegUserCircle>
                <div className=" text-xs hidden lg:flex">
                  <h3 className="text-white font-bold">
                    <small className="text-gray-300 ">Login</small> <br />{" "}
                    Account
                  </h3>
                </div>
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

      <div className="">
        <div className="navbar search hidden sm:flex sm:px-28 bg-[#263c97] text-white">
          <div className="navbar-start ">
            <div className="flex items-center gap-2 ">
              <div className="group relative">
                <div className="flex items-center">
                  <MdOutlineMenu className="text-xl text-white mr-2 cursor-pointer"></MdOutlineMenu>
                  <h1 className="text-xl hidden lg:flex text-white uppercase prata-regular">
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
                    <p className="cursor-pointer hover:text-[#082cbd]">
                      Tablets
                    </p>
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
            {/* <ul className="hidden sm:flex gap-5 text-3xl text-gray-900 "> */}
            <ul className="menu menu-horizontal  gap-5 text-xl uppercase ">
              {navOption}
            </ul>
          </div>
          <div className="navbar-end hidden md:flex">
            <div className="">
              <img className="w-10" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Shop */}
      <div>
        <h2 className="text-3xl text-base-content bg-gray-100  text-center font-medium p-4 uppercase">
          shop
        </h2>
      </div>
    </div>
  );
};

export default Navess;
