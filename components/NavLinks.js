import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLinks = ({ closeMenu }) => {
  const router = useRouter();

  const getLinkClassName = (href) => {
    const isActive = router.pathname === href;
    return `text-light-cream ${isActive ? 'md:text-dark-brown md:scale-110' : ''} text-4xl md:text-2xl md:hover:text-dark-brown md:hover:scale-110 md:duration-300`;
  };

  return (
    <nav className='flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-10'>
      <Link href="/about" className={getLinkClassName("/about")} onClick={closeMenu}>About</Link>
      <Link href="/projects" className={getLinkClassName("/projects")} onClick={closeMenu}>Projects</Link>
      <Link href="/resume" className={getLinkClassName("/resume")} onClick={closeMenu}>Resume</Link>
      <Link href="/contact" className={getLinkClassName("/contact")} onClick={closeMenu}>Contact</Link>
    </nav>
  );
};

export default NavLinks;