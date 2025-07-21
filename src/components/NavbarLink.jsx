"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLink = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm md:text-lg px-2 py-2 transition-colors text-white ${
        isActive ? "font-extrabold border-b-2 border-white" : "text-gray-700 hover:text-secondary"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
