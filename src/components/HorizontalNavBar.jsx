import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import profile from "../assets/user.jpg";
import { useLocation } from "react-router-dom";

const HorizontalNavBar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getRouteName = () => {
    const path = location.pathname;
    const routes = {
      "/": "Dashboard",
      "/billing": "Billing",
      "/customer-history": "History",
    };
    return routes[path] || "Home";

  }

  return (
    <nav className="bg-blue-500 p-4 px-10 text-white flex justify-between shadow-md">
      <h1 className="text-2xl font-semibold">{getRouteName()}</h1>
      <div className="flex items-center justify-center gap-10">
        <div className="relative">
          <FaBell
            className="text-black text-xl cursor-pointer mr-4"
            onClick={toggleDropdown}
          />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full mr-4">
              {notificationCount}
            </span>
          )}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 3
              </a>
            </div>
          )}
        </div>
        <img
          alt="profile"
          src={profile}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default HorizontalNavBar;
