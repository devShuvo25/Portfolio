import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                 <skill.icon className="text-4xl text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div className="h-2 w-full bg-dark-900 rounded-full mb-4 overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
              </div>
              <h3 className="text-light-100 font-bold mb-1 text-center group-hover:text-primary transition-colors">{skill.name}</h3>
              <p className="text-xs text-light-300 text-center">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
