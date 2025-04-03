import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Droplets,
  Shield,
  Clock,
  Award,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import Logo from "../images/logo.png";
// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {/* Logo Placeholder */}
          <div className="h-12 w-12 rounded-full  flex items-center justify-center overflow-hidden">
            <img
              src={Logo}
              alt="Route 66 Car Wash Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`font-bold text-xl ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
          >
            Route 66
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <a
                href={link.href}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }}>
            <a
              href="#book"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Book Now
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 focus:outline-none ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block font-medium text-gray-800 hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#book"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar