import React, { createContext, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FONT_SIZES, LANGUAGES, DEFAULT_FONT_SIZE, DEFAULT_LANGUAGE, DEFAULT_THEME } from '../constants';
import { 
  saveThemePreference, 
  loadThemePreference, 
  saveFontSizePreference, 
  loadFontSizePreference 
} from '../utils/localStorageUtils';


type AppSettingsContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
};

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(loadThemePreference());
  const [fontSize, setFontSize] = useState<string>(loadFontSizePreference());
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    saveThemePreference(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    saveFontSizePreference(fontSize);
  }, [fontSize]);


  return (
    <AppSettingsContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      fontSize, 
      setFontSize, 
      language, 
      setLanguage: changeLanguage 
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkMode ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={fontSize}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = () => {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return context;
};