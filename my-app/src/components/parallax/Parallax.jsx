import { useEffect, useRef } from "react";
import bgImage from "./../../img/photo/bg5.jpg";
import "./parallax.css";

const Parallax = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollTop * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="promo__title">
            Надёжные решения в IT, ГИС и строительстве
          </div>
          <div className="promo__derec">
            Мы — команда профессионалов, реализующая проекты полного цикла: от
            цифровых продуктов и геоинформационных систем до проектирования и
            строительства объектов. Работаем точно, эффективно и с гарантией
            результата
          </div>
        </div>
        <div className="promo_img">
          <img
            ref={imageRef}
            className="picture parallax-image"
            src={bgImage}
            alt="Promo"
          />
        </div>
      </div>
    </section>
  );
};

export default Parallax;
