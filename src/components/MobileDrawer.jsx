import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS, CV_LINK } from '../constants';

const MobileDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-dark-900 z-50 md:hidden flex flex-col shadow-2xl border-l border-white/10"
          >
            {/* Header / Close Button */}
             <div className="flex justify-end p-6">
                <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white transition-colors"
                >
                <FaTimes className="text-3xl" />
                </button>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={onClose}
                  className="group flex items-center"
                >
                  <span className="text-3xl md:text-4xl font-bold text-gray-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 font-display tracking-tight">
                    {link.label}
                  </span>
                </motion.a>
              ))}
               
               {/* Resume Button */}
                <motion.a
                    href={CV_LINK}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                     className="mt-8 flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg w-fit shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                >
                    Download Resume <FaDownload size={16} />
                </motion.a>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-[#111]">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors text-xl"
                            >
                                <link.icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
