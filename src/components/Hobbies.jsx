import { HOBBIES } from '../constants';
import { motion } from 'framer-motion';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">You can see me doing!</h1>
      <div className="slideshow-container">
        <motion.div
          className="slideshow"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        >
          {HOBBIES.concat(HOBBIES).map((hobby, index) => (
            <div key={index} className="slide">
              <img
                className="hobby-image"
                src={hobby.image}
                alt={hobby.title}
              />
              <p>{hobby.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;
