import styles from './Projectcardpage.module.css';
import bg05img from './../../img/photo/bg5.jpg';

const Projectcardpage = () => {
  return ( 
    <div className={styles.projectcard}>
      <div className={styles.projectcard__imageWrapper}>
        <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
        <div className={styles.projectcard__overlay}>
          <p className={styles.projectcard__overlayText}>
            Подробное описание
          </p>
        </div>
      </div>
      <div className={styles.projectcard__body}>
        <div className={styles.projectcard__text}>
          <div className={styles.projectcard__title}>Название&Название</div>
          <div className={styles.projectcard__muted}>Краткое описание...</div>
        </div>
      </div>
    </div>
  );
};

export default Projectcardpage;


