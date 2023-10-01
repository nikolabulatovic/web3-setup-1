import { useContext } from 'react';

import styles from './styles.module.scss';

import ThemeContext from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label htmlFor="theme-toggle" className="relative mb-4 flex cursor-pointer items-center">
      <input
        checked={theme === 'dark'}
        className={`${styles['theme-toggle']} sr-only`}
        id="theme-toggle"
        onChange={toggleTheme}
        type="checkbox"
      />
      <div
        className={`${styles['toggle-bg']} toggle-bg h-6 w-11 rounded-full border-2 border-gray-200 bg-gray-200`}
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900"></span>
    </label>
  );
};

export default ThemeToggle;
