import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#F2F4F7] ">
      <div className="py-[18px] px-4 max-w-[1232px] w-full flex justify-between items-center mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Rental<span className="text-blue-600">Car</span>
          </h1>
        </Link>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#0B44CD]" : "text-[#101828]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "text-[#0B44CD]" : "text-[#101828]"
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
