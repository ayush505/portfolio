import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import {
  AppSettingsProvider,
  useAppSettings,
} from "./context/AppSettingsContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const AppContent: React.FC = () => {
  const { isDarkMode } = useAppSettings();

  return (
    <motion.div
      className={`overflow-x-hidden antialiased ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="fixed top-0 -z-10 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`absolute top-0 z-[-2] h-screen w-screen ${
            isDarkMode
              ? "bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.3),rgba(255,255,255,0))]"
              : "bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.1),rgba(255,255,255,0))]"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </motion.div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppSettingsProvider>
        <AppContent />
      </AppSettingsProvider>
    </I18nextProvider>
  );
};

export default App;
