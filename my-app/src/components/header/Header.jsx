import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import logo from './../../img/logo/logo.jpg';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // прокрутка к якорю при переходе
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header__row">
          <Link to="/" className="header__logo" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" />
            <span>GISpro</span>
          </Link>

          <button
            className="burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
          </button>

          <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`} role="navigation">
            <ul>
              <li><Link to="/newspage" onClick={() => setIsMenuOpen(false)}>Новости</Link></li>
              <li><button onClick={() => scrollToSection('#services')}>Услуги</button></li>
              <li><button onClick={() => scrollToSection('#about')}>О нас</button></li>
              <li><Link to="/projectpage" onClick={() => setIsMenuOpen(false)}>Проекты</Link></li>
              <li><button onClick={() => scrollToSection('#achievement')}>Достижения</button></li>
              <li><button onClick={() => scrollToSection('#partners')}>Наши партнеры</button></li>
              <li><button onClick={() => scrollToSection('#requisite')}>Реквизиты</button></li>
              <li><Link to="/monitoringpage" onClick={() => setIsMenuOpen(false)}>Мониторинг</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
