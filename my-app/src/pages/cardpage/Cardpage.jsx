import styles from './Cardpage.module.css';
import dom01img from './../../img/photo/1.jpg';

const Cardpage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={dom01img} alt="Dom" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            Подробное описание
          </p>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Название&Название</div>
          <div className={styles.card__muted}>Краткое содержание...</div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
