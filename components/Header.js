import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

function Header() {
  const [shrink, setShrink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex justify-between items-center py-2 px-4 bg-gray-800 ${shrink ? 'shrink' : ''}`}>
      <Link href="/" className="text-white font-bold text-xl">BW</Link>
      {isOpen ? <CloseIcon toggle={toggle} /> : <MenuIcon toggle={toggle} />}
      <div className={`fixed inset-x-0 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 inset-y-0' : '-translate-y-full'} h-screen md:hidden`}>
        {isOpen && (
          <div className="z-20 flex justify-center items-center bg-teal-700 h-full">
            <NavLinks closeMenu={toggle} />
          </div>
        )}
      </div>
      <nav className="hidden md:flex md:items-center md:w-full">
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;