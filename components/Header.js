import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Logo from './Logo';

function Header() {
  return (
    <header className="z-50 flex justify-between items-center py-2 px-4 bg-tan sticky top-0 ">
      <Link href="/" >
        <Logo/>
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;