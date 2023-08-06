import Link from 'next/link';

const NavLinks = ({ closeMenu }) => (
  <nav className='flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-4 '>
    <Link href="/about" className="text-light-cream text-4xl md:text-2xl" onClick={closeMenu}>About</Link>
    <Link href="/projects" className="text-light-cream text-4xl md:text-2xl" onClick={closeMenu}>Projects</Link>
    <Link href="/resume" className="text-light-cream text-4xl md:text-2xl" onClick={closeMenu}>Resume</Link>
    <Link href="/contact" className="text-light-cream text-4xl md:text-2xl" onClick={closeMenu}>Contact</Link>
  </nav>
);

export default NavLinks;