import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../SVG_LoGo/Logo";

function Header() {
  return (
    <div className=" fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
      <nav className="text-white flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center pl-6 ">
          <Logo />
        </Link>

        <ul className="flex space-x-5 pr-[50px]">
          {["Home", "About", "Contact Us"].map((label, index) => {
            const paths = ["/", "/about", "/contact"];
            return (
              <li key={label} className="px-2 py-2">
                <NavLink
                  to={paths[index]}
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-semibold" : "hover:text-amber-300"
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
