import { HERO_CONTENT } from '../constants';
import profilepic from "../assets/profile1.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 }
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-transparent">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Prabhu Pathak
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-4 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/cv.pdf"
              download="Prabhu_Pathak_CV.pdf"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mb-4 lg:mb-6 inline-block rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-transform transform hover:scale-105 hover:bg-purple-100 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-500"
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="rounded-2xl h-[300px] lg:h-[400px] w-auto object-cover mt-4 lg:mt-0"
              src={profilepic}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
