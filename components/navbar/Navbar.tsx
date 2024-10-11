import React from "react";

import Link from "next/link";

import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className="nav fixed w-full left-0 right-0 top-0 z-20">
      <div className="container flex justify-between h-16 items-center">
        <Logo />

        <div>
          <ul className="flex gap-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-md shadow-lg rounded-lg p-4 ">
            <li>
              <Link href="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/membership" className="text-white">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <button className="text-[var(--pumpkinOrange)] text-4xl cursor-pointer">
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
