import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaDocker, FaFigma } from "react-icons/fa"; 
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { AiOutlineCode } from "react-icons/ai";
import { SiMui } from "react-icons/si"; 
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const headingVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5 } 
  }
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        className="my-20 text-center text-4xl"
        variants={headingVariants}
        initial="initial"
        animate="animate"
      >
        Technologies & Frameworks
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            React
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaNodeJs className="text-7xl text-green-600" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Node.js
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <AiOutlineCode className="text-7xl text-gray-600" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Express
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <DiMongodb className="text-7xl text-green-700" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            MongoDB
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <DiPostgresql className="text-7xl text-blue-700" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            PostgreSQL
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaDocker className="text-7xl text-cyan-500" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Docker
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaFigma className="text-7xl text-purple-500" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Figma
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          initial="initial"
          className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiMui className="text-7xl text-blue-600" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute bottom-[-30px] text-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            MUI
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
