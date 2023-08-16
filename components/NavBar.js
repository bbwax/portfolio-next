import React, { useState } from 'react';
import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import Link from 'next/link';
import Logo from './Logo';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggles the open state of the navbar
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggles between menu and close icons */}
      {isOpen ? <CloseIcon toggle={toggle} /> : <MenuIcon toggle={toggle} />}
      
      {/* Mobile navigation menu */}
      <div 
        className={`fixed inset-x-0 top-0 transform transition-transform duration-300 ease-in-out h-screen md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ willChange: 'transform' }} 
      >
        {/* Main navigation content */}
        <div className="flex flex-col justify-center items-center bg-dark-green h-full">
          {/* Logo */}
          <Link href="/" >
            <div className='absolute top-24 left-1/2 transform -translate-x-1/2'>
              <Logo />
            </div>
          </Link>
          
          {/* Navigation links */}
          <NavLinks closeMenu={toggle} />
        </div>
      </div>
      
      {/* Desktop navigation bar */}
      <nav className="hidden md:flex md:items-center md:w-full md:justify-end pr-12 ">
        <NavLinks />
      </nav>
    </>
  );
}

export default NavBar;