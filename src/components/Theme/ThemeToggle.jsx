import{ useEffect, useState } from 'react';
import './ThemeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={theme === 'light' ? faMoon : faSun}
      ></FontAwesomeIcon>
      <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}
