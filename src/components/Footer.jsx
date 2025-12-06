import { FaHeart, FaCode } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-db-900 border-t border-dark-800 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="flex items-center gap-2 mb-4 md:mb-0">
            <FaCode className="text-3xl text-primary" />
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Dev<span className="text-white">Shuvo</span>
            </span>
          </a>

          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
               <a 
                 key={link.label} 
                 href={link.href} 
                 className="text-light-300 hover:text-white transition-colors text-xl"
                 aria-label={link.label}
               >
                 <link.icon />
               </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-light-300">
           <p>&copy; {new Date().getFullYear()} Shuvo Mallik. All rights reserved.</p>
           <p className="flex items-center gap-1 mt-2 md:mt-0">
             Made with <FaHeart className="text-red-500" /> by Antigravity
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
