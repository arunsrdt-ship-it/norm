import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-items bottom-0 left-0 z-50  w-full text-md flex justify-around gap-50 border-t border-gray-300 shadow-xl p-5">
        <div className="item1">
          <span className="text-xl font-semibold"> About</span>
          <ul className="mt-4 font-semibold text-gray-500">
            <li className="mb-4">
              <Link>Our Story</Link>
            </li>
            <li className="mb-4">
              <Link>Privacy Policy</Link>
            </li>
            <li className="mb-4">
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="item2">
          <span className="text-xl font-semibold">Quick Links</span>
          <ul className="mt-4 font-semibold text-gray-500">
            <li className="mb-4">
              <Link>Courses</Link>
            </li>
            <li className="mb-4">
              <Link>More</Link>
            </li>
            <li className="mb-4">
              <Link>Careers</Link>
            </li>
          </ul>
        </div>
        <div className="item3">
          <span className="text-xl font-semibold"> Social Links</span>
          <ul className="mt-4 font-semibold text-gray-500">
            <li className="mb-4">
              <Link>Youtube</Link>
            </li>
            <li className="mb-4">
              <Link>Instagram</Link>
            </li>
            <li className="mb-4">
              <Link>Facebook</Link>
            </li>
          </ul>
        </div>
        <div className="item4">
          <span className="text-xl font-semibold">Social Links</span>
          <ul className="mt-4 font-semibold text-gray-500">
            <li className="mb-4">
              <Link>Call Us: +91 1112223333</Link>
            </li>
            <li className="mb-4">
              <Link>Address: Uttar Pradesh</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
