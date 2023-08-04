import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen ? <CloseIcon toggle={toggle} /> : <MenuIcon toggle={toggle} />}
      <div className={`fixed inset-x-0 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 inset-y-0' : '-translate-y-full'} h-screen md:hidden`}>
        {isOpen && (
          <div className="z-20 flex justify-center items-center bg-teal-700 h-full">
            <NavLinks closeMenu={toggle} />
          </div>
        )}
      </div>
      <nav className="hidden md:flex md:items-center md:w-full md:justify-end">
        <NavLinks />
      </nav>
    </>
  );
}

export default NavBar;