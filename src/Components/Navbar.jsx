import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = showMenu ? "hidden" : "auto";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMenu]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blogs", path: "/blogs" },
  ];

  const serviceModules = [
    "Kids Dentistry",
    "Dental Consultations",
    "Pain Free Treatment",
    "Aligners",
    "Invisalign",
    "Wisdom Tooth Removal",
    "Scaling",
    "Tooth Whitening",
    "Dental Implants",
    "Root Canal Treatment",
    "Full Mouth Rehabilitation",
    "Dental Crowns",
    "Zirconia Crowns",
  ];

  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-black shadow-md animate-slideTop"
          : "bg-black lg:bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 lg:py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          <span className="text-white text-xl font-extrabold leading-tight">
            CHAKRA <br />
            <span className="font-semibold text-sm tracking-wider">
              DENTAL HOSPITAL
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-md font-semibold relative pb-1 transition ${
                  isActive ? "text-[#ffffff] after:w-[70%]" : "text-white"
                } after:content-[''] after:absolute after:bottom-0 after:left-[15%] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-300 hover:after:w-[70%]`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="-mt-1 cursor-pointer text-md font-semibold text-white flex items-center gap-1">
              Services <FaChevronDown className="text-sm" />
            </span>

            <div
              className={`absolute right-0 top-full mt-2 bg-white text-black rounded-xl shadow-xl border border-[#e5e5e5] z-50 w-[500px] overflow-hidden transition-all duration-500 ease-in-out ${
                showDropdown
                  ? "max-h-[600px] py-4 opacity-100"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 px-6">
                {serviceModules.map((item, idx) => (
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    key={idx}
                    className="block text-sm font-medium text-gray-700 hover:text-[#650E45] hover:bg-[#f9f9f9] px-3 py-2 rounded-md transition duration-200"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="ml-3 bg-[#650E45] text-white px-4 py-2 rounded-sm text-md font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 z-50 ${
            isSticky ? "text-white" : "text-white"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="relative w-6 h-6">
            <FaBars
              size={22}
              className={`absolute transition-opacity duration-800 ${
                showMenu ? "opacity-0" : "opacity-100"
              }`}
            />
            <FaTimes
              size={22}
              className={`absolute transition-opacity duration-800 ${
                showMenu ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col px-5 py-8 transition-transform duration-500 z-40 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-10">
          {links.map((link) => (
            <>
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setShowMenu(false)}
                className="text-white text-lg font-semibold py-2 border-b border-gray-600 mx-6"
              >
                {link.name}
              </Link>
            </>
          ))}
          <div className="text-white text-lg font-semibold py-2 border-b border-gray-600 mx-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>Services</span>
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-600 ease-in-out ml-2 ${
                showDropdown ? "max-h-[500px] mt-4" : "max-h-0 mt-0"
              }`}
            >
              <div className="max-h-[270px] overflow-y-auto pr-2">
                <div className="grid grid-cols-1 gap-y-5">
                  {serviceModules.map((item, idx) => (
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      key={idx}
                      onClick={() => {
                        setShowDropdown(false);
                        setShowMenu(false);
                      }}
                      className="text-sm text-white hover:underline"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="mt-6 bg-[#650E45] text-white text-center px-4 py-3 rounded-full text-md font-semibold mx-6"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
