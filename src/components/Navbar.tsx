import React from "react";
// @ts-ignore
import { FaLinkedin, FaGithub, FaFont, FaGlobe } from "react-icons/fa";
import { FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useAppSettings } from "../context/AppSettingsContext";
// @ts-ignore
import { FONT_SIZES, LANGUAGES } from "../constants";
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const {
    isDarkMode,
    toggleTheme,
    fontSize,
    setFontSize,// @ts-ignore
    language,// @ts-ignore
    setLanguage,
  } = useAppSettings();

  const { t } = useTranslation();

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="logo" /> */}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={toggleTheme}
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              title={t('navbar.theme')}
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>

            <div className="relative">
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className={`appearance-none bg-transparent border ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'} rounded px-2 py-1 pr-8`}
                title={t('navbar.fontSize')}
              >
                {Object.entries(FONT_SIZES).map(([key, value]) => (
                  <option key={key} value={value}>{key}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <FaFont className={isDarkMode ? "text-white" : "text-black"} />
                <FiChevronDown className={isDarkMode ? "text-white" : "text-black"} />
              </div>
            </div>

            {/* <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`appearance-none bg-transparent border ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'} rounded px-2 py-1 pr-8`}
                title={t('navbar.language')}
              >
                {Object.entries(LANGUAGES).map(([key, value]) => (
                  <option key={key} value={value}>{key}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <FaGlobe className={isDarkMode ? "text-white" : "text-black"} />
                <FiChevronDown className={isDarkMode ? "text-white" : "text-black"} />
              </div>
            </div> */}

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ayush-katiyar-306969199"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/ayush505"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://x.com/katoo0109"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <FaSquareXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
