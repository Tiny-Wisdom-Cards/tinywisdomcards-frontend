"use client";

import NavbarLink from "./NavbarLink";
import { NAV_LINKS } from "@/constants/navitems";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 shadow-sm bg-[rgba(18,27,44,0.95)] backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Tiny Wisdom Logo"
              width={176}
              height={40}
              className="h-auto"
            />
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex space-x-7 items-center">
            {NAV_LINKS.map((link) => (
              <NavbarLink key={link.href} {...link} />
            ))}
            <Link
              href="/collection"
              className="text-sm md:text-lg px-6 py-2 bg-secondary rounded-full font-semibold transition-colors text-white hover:bg-opacity-90"
            >
              Collection
            </Link>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content shift */}
    </nav>
  );
};

export default Navbar;
