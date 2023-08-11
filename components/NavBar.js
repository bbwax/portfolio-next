import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import Link from 'next/link';
import Logo from './Logo';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when the navbar is open.
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when the navbar is closed.
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]); 

  return (
    <>
      {isOpen ? <CloseIcon toggle={toggle} className="z-50" /> : <MenuIcon toggle={toggle} className="z-50"/>}
      <div className={`fixed inset-x-0 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 inset-y-0' : '-translate-y-full'} h-screen md:hidden`}>
        {isOpen && (
          <div className="z-20 flex flex-col justify-center items-center bg-dark-green h-full">
            <Link href="/" >
              <div className='absolute top-24 left-1/2 -translate-x-16'>
                <Logo />
              </div>
            </Link>
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