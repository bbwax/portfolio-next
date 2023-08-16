import Link from 'next/link';

const Footer = () => {
  const githubRepoURL = "https://github.com/bbwax/portfolio-next";

  return (
    <footer className="px-4 py-6 bg-dark-green text-white text-center">
       &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      <div className="mt-4">
        <Link href={githubRepoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-white rounded hover:bg-white hover:text-dark-green transition-colors duration-300"
        >
          View on GitHub
        </Link>
      </div>
    </footer>
  );
}

export default Footer;