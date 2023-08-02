import Link from 'next/link';

const NavLinks = ({ closeMenu }) => (
  <nav className='flex flex-col md:flex-row md:justify-between md:w-full space-y-4 md:space-y-0 md:space-x-4'>
    <Link href="/about" className="text-white text-2xl" onClick={closeMenu}>About</Link>
    <Link href="/projects" className="text-white text-2xl" onClick={closeMenu}>Projects</Link>
    <Link href="/resume" className="text-white text-2xl" onClick={closeMenu}>Resume</Link>
    <Link href="/contact" className="text-white text-2xl" onClick={closeMenu}>Contact</Link>
  </nav>
);

export default NavLinks;
