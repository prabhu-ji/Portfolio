import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-neutral-300 text-center py-4" // Removed bg-neutral-900 class
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <a href="https://github.com/prabhu-ji" className="underline hover:text-gray-400">Prabhu Pathak</a>. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
