import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import logo from './../../img/logo/logo2.png';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const scrollToSection = (hash) => {
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header__row">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Logo" />
            <span>GISpro</span>
          </Link>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/newspage" onClick={() => setMenuOpen(false)}>Новости</Link></li>
              <li><button onClick={() => scrollToSection('#services')}>Услуги</button></li>
              <li><button onClick={() => scrollToSection('#about')}>О нас</button></li>
              <li><Link to="/projectpage" onClick={() => setMenuOpen(false)}>Проекты</Link></li>
              <li><button onClick={() => scrollToSection('#achievement')}>Достижения</button></li>
              <li><button onClick={() => scrollToSection('#partners')}>Наши партнеры</button></li>
              <li><button onClick={() => scrollToSection('#requisite')}>Реквизиты</button></li>
              <li><Link to="/monitoringpage" onClick={() => setMenuOpen(false)}>Мониторинг</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
