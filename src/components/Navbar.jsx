import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); 

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); 
  };

  const handleBackClick = () => {
    setActiveMenu("main"); 
  };

  return (
    <>
      <div className="flex items-center justify-between px-1 xl:px-10 py-3">
        <div className="max-w-52">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex gap-10 font-semibold max-xl:hidden">
          <div>
            <a href="#" className="anime">
              HOME
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="anime">
              SHOP BY CATEGORY
            </a>
            <div className="absolute hidden group-hover:block w-48 bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    Smart TV
                  </a>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    TWS
                  </a>
                </li>
                <li className="m-2 py-2">
                  <a href="#" className="anime">
                    Smart Watches
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="anime">
              SUPPORT & WARRANTY
            </a>
            <div className="absolute hidden group-hover:block w-48 bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    Services Centers
                  </a>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    Warranty Registration
                  </a>
                </li>
                <li className="m-2 py-2">
                  <a href="#" className="anime">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="anime">
              COMPANY
            </a>
            <div className="absolute hidden group-hover:block w-48 bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    About Us
                  </a>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                  <a href="#" className="anime">
                    Management
                  </a>
                </li>
                <li className="m-2 py-2">
                  <a href="#" className="anime">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a href="#" className="anime">
              CUSTOMER SUPPORT
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 text-2xl">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="max-xl:hidden">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="max-xl:hidden">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="xl:hidden">
            <i
              className="fa-solid fa-bars cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>
          </div>
        </div>
      </div>

      {/* hamburger */}
      <div
        className={`xl:hidden bg-white absolute top-0 left-0 w-80 z-10 h-[100vh] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform  ease-in-out`}
      >
        {activeMenu === "main" && (
          <div className="flex items-center justify-between p-4">
            <p className="text-xl font-semibold">Menu</p>
            <i
              className="fa-solid fa-xmark text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            ></i>
          </div>
        )}

        
        {activeMenu === "main" && (
          <ul className="flex flex-col  text-lg text-[#232323]">
            <li className="border-b p-2">
              <a href="#">HOME</a>
            </li>
            <li
              className="border-b p-2"
              onClick={() => handleMenuClick("shop")}
            >
              <div className="flex items-center justify-between">
                <a href="#">SHOP BY CATEGORY</a>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li
              className="border-b p-3"
              onClick={() => handleMenuClick("support")}
            >
              <div className="flex items-center justify-between">
                <a href="#">SUPPORT & WARRANTY</a>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li
              className="border-b p-3"
              onClick={() => handleMenuClick("company")}
            >
              <div className="flex items-center justify-between">
                <a href="#">COMPANY</a>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li className="border-b p-3">
              <a href="#">CUSTOMER SUPPORT</a>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-regular fa-circle-user"></i>
                <p>Sign In</p>
              </div>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-solid fa-user-plus"></i>
                <p>Create an Account</p>
              </div>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-regular fa-heart"></i>
                <p>My Wish List</p>
              </div>
            </li>
          </ul>
        )}

        
        {activeMenu === "shop" && (
          <div>
            <div className="flex p-3 gap-20 bg-[#f8f8f8] ">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>SHOP BY CATEGORY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
                <a href="#">Smart TV</a>
              </li>
              <li className="border-b p-3">
                <a href="#">TWS</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Smart Watches</a>
              </li>
            </ul>
          </div>
        )}

        
        {activeMenu === "support" && (
          <div>
            <div className="flex p-3 gap-16 bg-[#f8f8f8]">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>SUPPORT & WARRANTY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
                <a href="#">Services Centers</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Warranty Registration</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Return Policy</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        )}

        
        {activeMenu === "company" && (
          <div>
           <div className="flex p-3 gap-16 bg-[#f8f8f8]">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>SHOP BY CATEGORY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
                <a href="#">About Us</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Management</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Blog</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Careers</a>
              </li>
              <li className="border-b p-3">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
