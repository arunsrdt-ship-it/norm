import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar p-5 left-0  border-b-1 border-gray-400 text-black  w-full top-0 z-50 fixed shadow-md">
        <div className="nav-item flex justify-around items-center gap-[50vw]">
          <div className="company-logo ">
            <Link className="font-bold text-4xl">
              N<span className="font-semibold">Orm</span>
            </Link>
          </div>

          <div className="left-items">
            <ul className="flex gap-[50px] font-semibold text-xl ">
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
