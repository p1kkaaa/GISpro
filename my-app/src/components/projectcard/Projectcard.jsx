import styles from './Projectcard.module.css';
import bg05img from './../../img/photo/bg5.jpg'
import arrowimg from './../../img/icon/arrow.svg'
import { useNavigate } from 'react-router-dom';

const Projectcard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projectpage'); 
  }

  return (
    <div className={styles.projectcard}>
      <div className={styles.projectcard__imageWrapper}>
        <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
        <div className={styles.projectcard__overlay}>
          <p className={styles.projectcard__overlayText}>
            Разработка инновационного проекта с использованием новейших технологий
          </p>
          <button onClick={handleClick} className={styles.projectcard__button}>
            Смотреть
          </button>
        </div>
      </div>
      <div className={styles.projectcard__body}>
        <div className={styles.projectcard__text}>
          <div className={styles.projectcard__title}>Название&Название</div>
        </div>
        <button onClick={handleClick} className={styles.projectcard__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Projectcard;
