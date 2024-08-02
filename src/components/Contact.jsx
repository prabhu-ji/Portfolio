import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 px-4">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch!
      </motion.h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 my-4">
          <motion.div
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center"
          >
            <FaMapMarkerAlt className="mr-2 text-lg text-purple-400" />
            <p>{CONTACT.address}</p>
          </motion.div>
          <motion.div
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center"
          >
            <FaPhoneAlt className="mr-2 text-lg text-purple-400" />
            <p>{CONTACT.phoneNo}</p>
          </motion.div>
          <motion.div
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center"
          >
            <FaEnvelope className="mr-2 text-lg text-purple-400" />
            <a href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
