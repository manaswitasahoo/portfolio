"use client";

import Link from 'next/link';
import Image from 'next/image'; // Make sure to import the Image component
import { useState } from 'react';
import { cn } from '@/lib/utils';
import logo from '@/assets/images/apoorv_logo3_cropped.png';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <nav className={cn("navbar fixed top-0 left-0 right-0 flex items-center justify-between py-2 px-6 z-50 bg-black/80 text-white", className)}>
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="w-[100px] h-[50px] relative">
              <Image
                src={logo}
                alt="Apoorv Abhishek Logo"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </Link>
          <ul className="hidden md:flex space-x-6">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block px-4 py-2 rounded-md hover:bg-gray-700 hover:text-red-600 transition-colors text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-red-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

//Define links outside to avoid redundancy in the JSX
const navbarLinks = [
  // { href: "/browse", text: "Home" },
  { href: "/work-experience", text: "History" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/about-me", text: "About Me" },
  { href: "/blogs", text: "Blogs" }, // Added Blogs link
  { href: "/contact-me", text: "Hire Me" }
  
]