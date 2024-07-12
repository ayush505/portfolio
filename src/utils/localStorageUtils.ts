// localStorageUtils.ts

const THEME_KEY = 'theme';
const FONT_SIZE_KEY = 'fontSize';

export const saveThemePreference = (isDarkMode: boolean): void => {
  localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
};

export const loadThemePreference = (): boolean => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme ? JSON.parse(savedTheme) : false; // default to light mode
};

export const saveFontSizePreference = (fontSize: string): void => {
  localStorage.setItem(FONT_SIZE_KEY, fontSize);
};

export const loadFontSizePreference = (): string => {
  const savedFontSize = localStorage.getItem(FONT_SIZE_KEY);
  return savedFontSize ?? '16px'; // default font size
};
