import { useEffect, useState } from "react";
import bgImage from "./../../img/photo/bg5.jpg"; // Импортируем изображение
import "./parallax.css";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // Скорость параллакса
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__text">
            <div className="promo__title">
            Землеустройство и архитектурно-конструкторское проектирование
            </div>
            <div className="promo__desc">
            -конструкторское проектирование
            </div>
            <div className="promo__derec">Все объекты имеют своё местоположение. Однако понимание того, почему
            они находятся там, где они есть, - это совсем другая история.
            </div>
        </div>
          <div
            className="promo_img">
            <img className="picture" src={ bgImage } alt="Promo" />
          </div>
      </div>
    </section>
  );
};

export default Parallax;
