import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import profileImg from '../assets/profile.png';
import { FaGraduationCap, FaAward, FaUserTie } from 'react-icons/fa';

const About = ({ onEducationClick }) => {
  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center justify-between">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative group"
          >
            {/* Image Container with Blending */}
            <div className="relative z-10 w-80 h-96 mx-auto md:mr-auto overflow-hidden skew-y-0 transform">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                style={{ 
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 95%)', 
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 95%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                }}
              />
              
              {/* Overlay Gradients for smooth blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-90 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-transparent to-transparent pointer-events-none opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-dark-800 via-transparent to-transparent pointer-events-none opacity-80"></div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                 <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-lg backdrop-blur-sm">
                   <FaUserTie /> Available for Work
                 </div>
              </div>
            </div>
            
            {/* Decoration behind image */}
            <div className="absolute top-10 left-0 w-80 h-80 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-[60px] -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: false }}
          >
            <div className="bg-dark-700/30 p-8 rounded-2xl border border-dark-700 backdrop-blur-sm">
               <p className="text-light-200 text-lg leading-relaxed mb-8">
                 {ABOUT_TEXT}
               </p>

               <div className="space-y-6">
                 {/* Education Card */}
                 <div 
                    onClick={onEducationClick}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-600 hover:border-primary/40 hover:bg-dark-800 transition-all duration-300 cursor-pointer group"
                 >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <FaGraduationCap size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Education</h4>
                       <p className="text-primary font-medium">Bachelor of Urban & Regional Planning</p>
                       <div className="flex justify-between items-center mt-1">
                          <span className="text-light-300 text-sm">KUET</span>
                          <span className="text-xs bg-dark-700 text-light-400 px-2 py-0.5 rounded">2024 - Present</span>
                       </div>
                    </div>
                 </div>

                 {/* Certifications Card */}
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-600 hover:border-secondary/40 hover:bg-dark-800 transition-all duration-300">
                    <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                       <FaAward size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white">Certifications</h4>
                       <p className="text-secondary font-medium">Complete Web Development</p>
                       <div className="flex justify-between items-center mt-1">
                          <span className="text-light-300 text-sm">Programming Hero (MERN Stack)</span>
                          <span className="text-xs bg-dark-700 text-light-400 px-2 py-0.5 rounded">Dec 2025</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
