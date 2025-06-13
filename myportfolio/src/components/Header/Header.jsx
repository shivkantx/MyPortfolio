import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close mobile menu
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <div className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
      <nav className="text-white px-4 py-3">
        <div className="w-full flex items-center justify-between md:px-6">
          {/* Logo */}
          <div className="flex items-center font-semibold text-lg">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Shiv</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Kant</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 text-sm font-semibold">
            {menuItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`cursor-pointer hover:text-[#8245ec] transition-all duration-200 ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-[22px] w-[22px] hover:scale-110 duration-200 hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-kant-036a17289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-[22px] w-[22px] hover:scale-110 duration-200 hover:text-gray-500" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 px-4 pb-4">
            <ul className="space-y-4 text-gray-300 text-sm font-semibold">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`block cursor-pointer hover:text-[#8245ec] ${
                      activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/shivkantx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-[22px] w-[22px] hover:scale-110 duration-200 hover:text-gray-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shiv-kant-036a17289/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-[22px] w-[22px] hover:scale-110 duration-200 hover:text-gray-500" />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
