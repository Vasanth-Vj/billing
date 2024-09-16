import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill, RiFileList3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const VerticalNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  const openSideNav = () => {
    if (!isOpen) setIsOpen(true);
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: <RiDashboardFill className="h-6 w-6" />,
    },
    {
      title: "Billing",
      path: "/billing",
      icon: <RiFileList3Fill className="h-6 w-6" />,
    },
    {
      title: "History",
      path: "/customer-history",
      icon: <FaUser className="h-6 w-6" />,
    },
  ];

  const location = useLocation();

  return (
    <div
      className={`bg-black min-h-screen p-5 duration-300 ease-in-out ${
        isOpen ? "w-56" : "w-20"
      }`}
    >
      <div className="inline-flex items-center">
        <img
          alt="logo"
          src={logo}
          className={`rounded h-9 cursor-pointer duration-500`}
          onClick={toggleSideNav}
        />
        <h1
          className={`ml-3 text-2xl font-bold text-white origin-left duration-300 ${
            !isOpen && "scale-0"
          }`}
        >
          Billing
        </h1>
      </div>

      <ul className="space-y-4 mt-5">
        {Menus.map((menu, index) => (
          <li key={index} className="text-gray-300">
            <Link
              to={menu.path}
              className={`flex items-center p-2 rounded-md duration-300 ease-in-out ${
                location.pathname === menu.path
                  ? "bg-gray-800"
                  : "hover:bg-gray-700"
              }`}
              onClick={openSideNav}
            >
              {menu.icon}
              <span
                className={`ml-4 text-white origin-left duration-300 ease-in-out ${
                  !isOpen && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavBar;
