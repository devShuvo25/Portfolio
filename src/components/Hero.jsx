import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import profileImage from '../assets/profileImage.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden pt-20 pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="text-primary font-medium tracking-wider mb-4 block">HELLO, I'M</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Shuvo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mallik</span>
          </h1>
          <p className="text-light-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            A creative MERN Stack Developer transforming ideas into exceptional digital experiences. Specialized in building modern, responsive, and scalable web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-3 border border-dark-700 text-light-200 font-bold rounded-full hover:bg-dark-800 transition-all">
              View Work
            </a>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-800 p-4 rounded-full border border-dark-700 hover:border-primary/50 text-light-200 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg group"
              >
                <link.icon className="text-2xl group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="relative hidden md:block"
        >
           {/* Profile Image with Advanced Blending and Bouncing Animation */}
           <div className="relative w-96 h-[500px] mx-auto z-10">
              {/* Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[80px] -z-10 translate-y-10"></div>
              
              <div className="relative w-full h-full rounded-b-full overflow-hidden">
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  src='https://i.ibb.co.com/fG90B4Mp/Profile-Professional.png'
                  alt="Shuvo Mallik" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 50%, transparent 90%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 50%, transparent 90%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                  }}
                />
                
                {/* Overlay to further blend bottom if mask isn't enough */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent pointer-events-none"></div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
