import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiMenu, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

const Menu = [
  {
    id: "home",
    name: "Home",
    link: "#home",
  },
  {
    id: "topproduct",
    name: "Top Rated",
    link: "#topproduct",
  },
  {
    id: "kids",
    name: "Kids Wear",
    link: "#kids",
  },
  {
    id: "men",
    name: "Men Wear",
    link: "#men",
  },
  {
    id: "women",
    name: "Women wear",
    link: "#women",
  },
  {
    id: "saari",
    name: "Saari",
    link: "#saari",
  },
];

const DropdownLinks = [
  {
    id: "trending",
    name: "Trending Products",
    link: "#trending",
  },
  {
    id: "offer",
    name: "Best Selling",
    link: "#offer",
  },
  {
    id: "top-rated",
    name: "Top Rated",
    link: "#topproduct",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileTrendingOpen, setMobileTrendingOpen] = React.useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileTrendingOpen(false);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#home" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              SURYANATH DRESSES
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                aria-label="Search products"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#trending" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[220px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="absolute top-[64px] left-0 right-0 mx-auto w-full max-w-[520px] bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl overflow-hidden">
            <div className="p-4 flex flex-col gap-3">
              {Menu.map((data) => (
                <a
                  key={data.id}
                  href={data.link}
                  onClick={closeMobileMenu}
                  className="px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {data.name}
                </a>
              ))}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setMobileTrendingOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-primary/10 duration-200"
                >
                  <span>Trending Products</span>
                  <FaCaretDown
                    className={`transition-all duration-200 ${mobileTrendingOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileTrendingOpen && (
                  <ul className="mt-2 flex flex-col gap-1 pl-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 rounded-md hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;
