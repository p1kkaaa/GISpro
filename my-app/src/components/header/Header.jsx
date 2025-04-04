import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './header.css';
import logo from './../../img/logo/logo.jpg';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

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
          <nav className="header__nav">
            <ul>
              <li><Link to="/Newspage">Новости</Link></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#about">О нас</a></li>
              <li><Link to="/projectpage">Проекты</Link></li>
              <li><a href="#achievement">Достижения</a></li>
              <li><a href="#partners">Наши партнеры</a></li>
              <li><Link to="/monitoringpage">Мониторинг</Link></li>
              <li><a href="#requisite">Реквизиты</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
