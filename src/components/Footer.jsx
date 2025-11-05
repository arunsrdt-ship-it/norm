import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-20">
      <div className="foot-items flex flex-wrap justify-around gap-8 sm:gap-12 md:gap-20 lg:gap-32 px-6 py-10 border-t border-gray-300 shadow-xl text-md">
        {/* About Section */}
        <div className="item1 flex flex-col">
          <span className="text-xl font-semibold">About</span>
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

        {/* Quick Links Section */}
        <div className="item2 flex flex-col">
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

        {/* Social Links Section */}
        <div className="item3 flex flex-col">
          <span className="text-xl font-semibold">Social Links</span>
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

        {/* Contact Info Section */}
        <div className="item4 flex flex-col">
          <span className="text-xl font-semibold">Contact Info</span>
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
