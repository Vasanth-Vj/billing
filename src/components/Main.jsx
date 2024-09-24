import React, { useState } from "react";
import VerticalNavBar from "./layout/VerticalNavBar";
import HorizontalNavBar from "./layout/HorizontalNavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  return (
    <div className="flex h-screen">
      <div className=" fixed h-full">
      <VerticalNavBar
          isOpen={sideNavOpen}
          toggleSideNav={() => setSideNavOpen(!sideNavOpen)}
        />
      </div>

      <div
        className={`flex flex-col flex-grow duration-300 ${
          sideNavOpen ? "ml-60" : "ml-20"
        }`}
      >
        <HorizontalNavBar />
        <div className="flex-grow p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
