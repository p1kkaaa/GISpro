import styles from './Cardpage.module.css';
import dom01img from './../../img/photo/1.jpg'



const Cardpage = () => {


  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={dom01img} alt="Dom" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Название&Название</div>
          <div className={styles.card__muted}>Описание...</div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;