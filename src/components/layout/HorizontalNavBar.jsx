import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import envelop from "../../assets/envelop-icon.png";
import notification from "../../assets/notification-icon.png";
import divider from "../../assets/Divider.svg";
import avatar from "../../assets/avatar-image.png";
import downArrow from "../../assets/down-arrow.svg";
import leftArrow from "../../assets/left-arrow.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const HorizontalNavBar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(12);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getRouteName = () => {
    const path = location.pathname;
    const routes = {
      "/main": "Dashboard",
      "/main/create-invoice": "Create New Invoice",
      "/main/invoices": "Billing",
      "/main/view-invoice": "Invoices Details",
      "/main/preview": "Create New Invoice",
      "/main/products": "Products & Services",
      "/main/clients": "Clients",
      "/main/invoice": "Invoice",
      "/main/history": "History",

      "/main/profile": "Profile",
      "/main/account": "Settings",
      "/main/advisor": "My Advisor",
      "/help-center": "Help Center",
    };
    return routes[path] || "Home";
  };

  return (
    <nav className={`bg-white text-[#333843] p-4 px-10 flex justify-between border-b border-[#F0F1F3]`}>
      <div className="flex items-center gap-5">
        <h1 className="text-xl font-semibold text-[#333843]">
          {getRouteName()}
        </h1>
      </div>

      <div className="flex items-center justify-center gap-5">
        <FaRegEnvelope className="w-6 h-6 cursor-pointer" />
        <div className="relative">
          <IoNotificationsOutline
            className="text-2xl cursor-pointer mr-4"
            onClick={toggleDropdown}
          />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#1EB386] rounded-full mr-4">
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
        <img alt="Divider" src={divider} className="w-6 h-6" />
        <img
          alt="profile"
          src={avatar}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col ml-4">
          <span className="font-medium">John Doe</span>
          <span className="text-sm text-gray-600">+1 234 567 890</span>
        </div>

        <MdKeyboardArrowDown className="h-4 w-4 cursor-pointer" />
      </div>
    </nav>
  );
};

export default HorizontalNavBar;
