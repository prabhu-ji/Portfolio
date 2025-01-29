import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 bg-transparent">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img 
            className="rounded-2xl w-full max-w-sm lg:max-w-md mt-[-30px]" 
            src={aboutImg} 
            alt="About" 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 flex justify-center lg:justify-start'
        >
          <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
