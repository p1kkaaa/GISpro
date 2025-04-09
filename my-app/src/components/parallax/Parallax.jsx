import { useEffect, useState } from "react";
import bgImage from "./../../img/photo/bg5.jpg";
import "./parallax.css";

const Parallax = () => {


  return (
    <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="promo__title">
            Землеустройство и архитектурно-конструкторское проектирование
          </div>
          <div className="promo__desc">проектирование</div>
          <div className="promo__derec">
            Все объекты имеют своё местоположение. Однако понимание того, почему
            они находятся там, где они есть, - это совсем другая история.
          </div>
        </div>
        <div className="promo_img">
          <img className="picture" src={bgImage} alt="Promo" />
        </div>
      </div>
    </section>
  );
};

export default Parallax;
