import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaFigma, FaPhp, FaGitAlt } from "react-icons/fa"; 
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { AiOutlineCode } from "react-icons/ai";
import { SiMui, SiLaravel, SiAngular } from "react-icons/si"; 
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
        {[ 
          { icon: <SiAngular className="text-7xl text-red-600" />, name: "Angular", color: "text-red-600", duration: 4 },
          { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React", color: "text-cyan-400", duration: 2.5 },
          { icon: <FaPhp className="text-7xl text-indigo-600" />, name: "PHP", color: "text-indigo-600", duration: 3 },
          { icon: <FaNodeJs className="text-7xl text-green-600" />, name: "Node.js", color: "text-green-600", duration: 3 },
          { icon: <AiOutlineCode className="text-7xl text-gray-600" />, name: "Express", color: "text-gray-600", duration: 5 },
          { icon: <DiMongodb className="text-7xl text-green-700" />, name: "MongoDB", color: "text-green-700", duration: 2 },
          { icon: <DiPostgresql className="text-7xl text-blue-700" />, name: "PostgreSQL", color: "text-blue-700", duration: 6 },
          { icon: <FaFigma className="text-7xl text-purple-500" />, name: "Figma", color: "text-purple-500", duration: 3.5 },
          { icon: <SiMui className="text-7xl text-blue-600" />, name: "MUI", color: "text-blue-600", duration: 2 },
          { icon: <SiLaravel className="text-7xl text-red-500" />, name: "Laravel", color: "text-red-500", duration: 3.5 },
          { icon: <FaGitAlt className="text-7xl text-orange-600" />, name: "Git", color: "text-orange-600", duration: 2.5 }
        ].map(({ icon, name, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            animate="animate"
            initial="initial"
            className="relative flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 group"
          >
            {icon}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileHover="visible"
              className={`absolute bottom-[-30px] text-center ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
