import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Logo from './Logo';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-50 flex justify-between items-center py-2 px-4 sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-transparent md:bg-tan' : 'bg-tan'}`}>
      <Link href="/" >
        <div className='md:hover:scale-125 duration-300'>
          <Logo />
        </div>
      </Link>
      <NavBar isScrolled={isScrolled} />
    </header>
  );
}

export default Header;