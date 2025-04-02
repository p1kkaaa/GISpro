<!-- import React, { useState, useEffect } from 'react';
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
    <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
            <span>GISpro</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#!">Новости</a></li>
              <li><a href="#!">Услуги</a></li>
              <li><a href="#!">О нас</a></li>
              <li><a href="#!">Проекты</a></li>
              <li><a href="#!">Достижения</a></li>
              <li><a href="#!">Наши партнеры</a></li>
              <li><a href="#!">Мониторинг</a></li>
              <li><a href="#!">Реквизиты</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header; -->
ITEM HEADER