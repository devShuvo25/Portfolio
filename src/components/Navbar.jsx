import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CV_LINK } from '../constants';
import { FaBars, FaTimes, FaCode, FaDownload } from 'react-icons/fa';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 relative z-50">
            <FaCode className="text-3xl text-primary" />
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Dev<span className="text-white">Shuvo</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-light-200 hover:text-primary transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
               href={CV_LINK}
               target="_blank"
               rel="noreferrer"
               className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Resume <FaDownload size={12} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none relative z-50 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* New Mobile Side Drawer Component */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
