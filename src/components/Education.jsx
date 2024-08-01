import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const educationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            variants={educationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex text-purple-100 flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-300">{edu.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-purple-400">{edu.type}</h6>
              <p className=" text-neutral-400">{edu.institution}</p>
              <p className="mb-4 stroke-black text-neutral-400">
                {edu.type === "B.Tech - CSE" ? "CGPA: " : "Percentage: "}
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
