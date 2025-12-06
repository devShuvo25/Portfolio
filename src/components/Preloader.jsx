import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-24 h-24 mb-8">
           <motion.span
             className="absolute inset-0 border-4 border-primary/30 rounded-full"
             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           />
           <motion.span
             className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full"
             animate={{ rotate: 360 }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
           <div className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-md animate-pulse"></div>
        </div>

        {/* Text Animation */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            DevShuvo
          </motion.h1>
        </div>
        
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full"
            style={{ width: '100px' }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
