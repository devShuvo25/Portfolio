import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

      <div className="text-center z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl md:text-[12rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-700 to-dark-800 select-none relative"
        >
          404
          {/* Glitch Overlay */}
          <motion.span 
             className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-50"
             animate={{ x: [-2, 2, -2], skewX: [0, 5, -5, 0] }}
             transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >
            404
          </motion.span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lost in Space?</h2>
            <p className="text-light-300 text-lg mb-8 max-w-md mx-auto">
                The page you are looking for seems to have drifted away into a black hole.
            </p>
            
            <Link 
                to="/" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 transition-all duration-300"
            >
                Return to Base
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
