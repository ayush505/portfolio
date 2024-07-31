import aboutImg from "../assets/about.jpg";
// import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useAppSettings } from '../context/AppSettingsContext';
import { useTranslation } from 'react-i18next';

function About() {
  const { isDarkMode } = useAppSettings();
  const { t } = useTranslation();


  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'} pb-4`}>
      <motion.h1 
        className={`my-20 text-center text-4xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('about.heading')}
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <motion.img 
              src={aboutImg} 
              alt="about" 
              className="h-80 w-80 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p 
              className={`my-2 max-w-xl py-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('about.content')}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;