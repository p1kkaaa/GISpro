import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // добавили useNavigate, useLocation
import './header.css';
import logo from './../../img/logo/logo2.png';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
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

  // 💡 Скролл к якорю после перехода
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // переход на главную и установка хеша
  const scrollToSection = (hash) => {
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
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
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        	<span className="navbar-toggler-icon"></span>
          <nav className="header__nav">
            <ul>
              <li><Link to="/newspage">Новости</Link></li>
              <li><button onClick={() => scrollToSection('#services')}>Услуги</button></li>
              <li><button onClick={() => scrollToSection('#about')}>О нас</button></li>
              <li><Link to="/projectpage">Проекты</Link></li>
              <li><button onClick={() => scrollToSection('#achievement')}>Достижения</button></li>
              <li><button onClick={() => scrollToSection('#partners')}>Наши партнеры</button></li>
              <li><button onClick={() => scrollToSection('#requisite')}>Реквизиты</button></li>
              <li><Link to="/monitoringpage">Мониторинг</Link></li>
            </ul>
          </nav>
      	</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
