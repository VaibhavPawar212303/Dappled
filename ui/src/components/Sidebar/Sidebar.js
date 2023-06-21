import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../utilities/navigation";

import classNames from "classnames";
const linkClasses =
  "flex items-center text-xl text-black font-light px-3 py-2 hover:bg-amber-50 gap-2 rounded-sm";

function Sidebar() {
  return (
    <div className="bg-white w-60 p-3 flex flex-col text-white shadow-xl">
      <div className="ml-2 mb-3" id="logo">
        <img
          src="https://www.testrigtechnologies.com/wp-content/uploads/2020/05/logo-9.png"
          class="h-6 mr-3 sm:h-9"
          alt="TestRig Logo"
        />
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col pt-2 border-2 gap-0.5 border-neutral-700 h-20">
        {DASHBOARD_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-200 text-black"
          : "text-neutral-500",
        linkClasses
      )}
    >
      <span className="text-xl text-black">{item.icon}</span>
      <span className="text-black"> {item.label}</span>
    </Link>
  );
}

export default Sidebar;
