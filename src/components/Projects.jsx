import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-dark-900 rounded-2xl overflow-hidden border border-dark-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64 bg-dark-950 p-0 flex items-center justify-center group-hover:bg-dark-950/50 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transform scale-110 group-hover:scale-125 transition-transform duration-500 drop-shadow-xl"
                />
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.links.demo} className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-colors">Demo</a>
                  <a href={project.links.code} className="px-4 py-2 bg-dark-700 text-white text-sm font-bold rounded-full hover:bg-dark-600 transition-colors">Code</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-light-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-dark-800 text-primary rounded-full border border-dark-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
