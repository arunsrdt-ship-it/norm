import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar p-5 border-b-1 border-gray-400 text-black w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="flex justify-between items-center">
          {/* Company Logo */}
          <div className="company-logo">
            <Link to="/" className="font-bold text-4xl">
              N<span className="font-semibold">Orm</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-3xl focus:outline-none"
          >
            <span className="material-icons">menu</span>
          </button>

          {/* Navigation Items */}
          <div className={`lg:flex ${isMobileMenuOpen ? "block" : "hidden"} flex-col lg:flex-row gap-6`}>
            <ul className="flex flex-col lg:flex-row gap-6 font-semibold text-xl lg:text-base">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/policy">Policy</Link>
              </li>
              <li>
                <Link to="/carts">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
