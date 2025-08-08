"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLink = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm lg:text-lg px-2 py-2 transition-colors text-white 
         
        `}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;



