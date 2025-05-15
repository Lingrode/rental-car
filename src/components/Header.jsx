import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow ">
      <div className="p-4 max-w-[1232px] w-full flex justify-between items-center mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Rental<span className="text-blue-600">Car</span>
          </h1>
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600">
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
