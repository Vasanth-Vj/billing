import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logomark from "../../assets/logomark.png";
import { RxDashboard } from "react-icons/rx";
import { BiReceipt } from "react-icons/bi";
import { TbFileInvoice } from "react-icons/tb";
import { TbClipboardText } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const VerticalNavBar = ({ isOpen, toggleSideNav }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const openSideNav = () => {
    if (!isOpen) setIsOpen(true);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu((prev) => (prev === index ? null : index));
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: <RxDashboard className="h-6 w-6" />,
    },
    {
      title: "Billing",
      icon: <BiReceipt className="h-6 w-6" />,

      submenu: true,
      submenuItems: [
        { title: "Create Invoice", path: "/create-invoice" },
        { title: "Quotes & Invoices", path: "/invoices" },
        { title: "Clients", path: "/clients" },
      ],
      routes: ["create-invoice", "invoice", "clients"],
    },
    {
      title: "Invoice",
      path: "/invoice",
      icon: <TbFileInvoice className="h-6 w-6" />,
    },
    {
      title: "History",
      path: "/history",
      icon: <TbClipboardText className="h-6 w-6" />,
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline className="h-6 w-6" />,
      submenu: true,
      submenuItems: [
        { title: "Profile", path: "/profile" },
        { title: "Account", path: "/account" },
      ],
      routes: ["profile", "account"],
    },
  ];

  const BottomMenus = [
    {
      title: "My Advisor",
      path: "/advisor",
      icon: <RiMessage2Line className="h-6 w-6" />,
    },
    {
      title: "Help Center",
      path: "/help-center",
      icon: <IoCallOutline className="h-6 w-6" />,
    },
  ];

  const location = useLocation();

  const isActiveMenu = (menu) => {
    if (menu.submenu) {
      return menu.submenuItems.some(
        (submenuItem) => location.pathname === submenuItem.path
      );
    }
    return location.pathname === menu.path;
  };

  return (
    <div
      className={`flex flex-col justify-between bg-black text-white min-h-screen duration-300 ease-in-out ${
        isOpen ? "w-[264px]" : "w-20"
      }`}
    >
      <div className="w-[88.63%] p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            alt="logo"
            src={Logomark}
            className="rounded h-9 cursor-pointer duration-500"
            onClick={toggleSideNav}
          />
          <h1
            className={`ml-3 text-2xl text-white font-inter font-medium origin-left duration-300 ${
              !isOpen && "scale-0"
            }`}
          >
            Billing Desk
          </h1>
        </div>

        {/* Main Menus */}
        <ul className="space-y-4 mt-5 flex-grow">
          {Menus.map((menu, index) => (
            <li key={index} className="text-gray-300">
              <div>
                <Link
                  to={menu.path}
                  className={`flex items-center justify-between p-2 rounded-md duration-300 ease-in-out ${
                    isActiveMenu(menu)
                      ? "bg-black text-[#1EB386]"
                      : "hover:bg-[#1EB386] text-[#667085]"
                  }`}
                  onClick={() => {
                    openSideNav();
                    if (menu.submenu) toggleSubmenu(index);
                  }}
                >
                  <div className="flex items-center">
                    {menu.icon}
                    <span
                      className={`ml-4 origin-left duration-300 ease-in-out ${
                        !isOpen && "hidden"
                      } ${
                        isActiveMenu(menu) ? "text-[#1EB386]" : "text-[#667085]"
                      }`}
                    >
                      {menu.title}
                    </span>
                  </div>

                  {menu.submenu && isOpen && (
                    <div className="flex items-center">
                      {activeSubmenu === index ? (
                        <MdKeyboardArrowUp className="h-4 w-4" />
                      ) : (
                        <MdKeyboardArrowDown className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </Link>

                {menu.submenu && activeSubmenu === index && isOpen && (
                  <ul className="ml-10 mt-2 space-y-2">
                    {menu.submenuItems.map((submenuItem, idx) => (
                      <li key={idx}>
                        <Link
                          to={submenuItem.path}
                          className={`flex items-center p-2 rounded-md duration-300 ease-in-out ${
                            location.pathname === submenuItem.path
                              ? "bg-[#1EB386] text-white"
                              : "hover:bg-[#1EB386] text-[#667085]"
                          }`}
                        >
                          <span>{submenuItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[88.63%] p-4">
        {/* Bottom Menus */}
        <ul className="mt-auto space-y-4">
          {BottomMenus.map((menu, index) => (
            <li key={index} className="text-gray-300">
              <Link
                to={menu.path}
                className={`flex items-center justify-between p-2 rounded-md duration-300 ease-in-out ${
                  location.pathname === menu.path
                    ? "bg-black text-[#1EB386]"
                    : "hover:bg-[#1EB386] text-[#667085]"
                }`}
              >
                <div className="flex items-center">
                  {menu.icon}
                  <span
                    className={`ml-4 origin-left duration-300 ease-in-out ${
                      !isOpen && "hidden"
                    } ${
                      location.pathname === menu.path
                        ? "text-[#1EB386]"
                        : "text-[#667085]"
                    }`}
                  >
                    {menu.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavBar;
