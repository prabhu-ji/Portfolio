import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const detailsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/3 mb-8 lg:mb-0"
            >
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-72 object-cover rounded" 
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
            </a>
            <motion.div
              variants={detailsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-2/3 lg:pl-8" 
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-xl font-semibold text-cyan-600 block"
              >
                {project.title}
              </a>
              <p className="mb-4 text-neutral-400">
                <strong>Summary:</strong> {project.description}
              </p>
              <p className="mb-4 text-neutral-400">
                <strong>Future Scope:</strong> {project.scope}
              </p>
              <div className="mb-4 text-neutral-400">
                <strong>Tech Used: </strong>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 text-sm font-medium rounded text-purple-500 bg-neutral-800 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
