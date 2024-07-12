import profilePic from "../assets/ashisjena.jpg";
// import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useAppSettings } from "../context/AppSettingsContext";
import { useTranslation } from 'react-i18next';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

function Hero() {
  const { isDarkMode } = useAppSettings();
  const { t } = useTranslation();

  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'} pb-4 lg:mb-35`}>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={`pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              {t('hero.name')}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
            >
              {t('hero.title')}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`mt-4 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {/* {HERO_CONTENT} */}
              {t('hero.content')}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ashis Jena"
              className={`h-80 w-80 rounded-full  object-cover ${isDarkMode ? 'border-4 border-gray-700' : 'border-4 border-gray-300'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;