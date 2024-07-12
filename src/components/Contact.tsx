import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useAppSettings } from '../context/AppSettingsContext';

function Contact() {
  const { isDarkMode } = useAppSettings();


  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'} pb-20`}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;