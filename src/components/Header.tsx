import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../styles/components/header.css'

type Theme = 'light' | 'dark';

function storedTheme(): Theme {
  try {
    return localStorage.getItem('theme') === 'light-mode' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(storedTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    try {
      if (theme === 'light') {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
      }
    } catch {
      // Private browsing can block storage; the toggle still applies for this visit.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const isLight = theme === 'light';

  return (
    <header className="header container">
      <nav className="header__nav">
        <ul className="header__menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="header__link" href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="header__line"></li>
          <li><a className="header__resume btn" href="/VGodwin_2Y_01m_Fullstack_Developer_v3.pdf" download="VGodwin_Resume.pdf">Resume</a></li>
        </ul>
        <button
          type="button"
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          aria-pressed={isLight}
          className="header__sun"
          onClick={toggleTheme}
        >
          {isLight ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="header__bars"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
        <button type="button" className="mobile-nav__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <ul className="mobile-nav__menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="mobile-nav__link" href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav__link-line"></li>
          <li>
            <a className="mobile-nav__link mobile-nav__btn btn" href="/VGodwin_2Y_01m_Fullstack_Developer_Resume.pdf" download="VGodwin_Resume.pdf" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
