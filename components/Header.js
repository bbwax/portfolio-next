import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-tan sticky top-0 z-50">
      <Link href="/" className="text-white font-bold text-xl">BW</Link>
      <NavBar />
    </header>
  );
}

export default Header;