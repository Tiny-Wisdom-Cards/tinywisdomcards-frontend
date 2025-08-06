"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarLink from "./NavbarLink";
import { NAV_LINKS } from "@/constants/navitems";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-primary/90 shadow-md" : "bg-gray-overlay opacity-95"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 py-2 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 ">
            <Image
              src="/images/logo.svg"
              alt="Tiny Wisdom Logo"
              width={40}
              height={40}
              className="w-32 lg:w-44"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-3 lg:space-x-7 items-center">
            {NAV_LINKS.map((link) => (
              <NavbarLink key={link.href} {...link} />
            ))}
            <Link
              href="/#collection"
              className="text-sm lg:text-lg px-8 py-2 bg-secondary rounded-full font-semibold transition-colors text-white"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7 text-white" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden h-screen bg-primary text-white px-6 pt-1 pb-3 space-y-4">
          <div className="flex flex-col text-center w-fit mx-auto">
            {NAV_LINKS.map((link) => (
              <NavbarLink key={link.href} {...link} />
            ))}
            <Link
              href="/#collection"
              className="block text-center text-sm px-6 py-2 bg-secondary rounded-full font-semibold text-white"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
