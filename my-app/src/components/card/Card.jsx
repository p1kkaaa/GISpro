import styles from './Card.module.css';
import dom01img from './../../img/photo/1.jpg'
import arrowimg from './../../img/icon/arrow.svg'


const Card = () => {
  return (
  <div className={styles.card}>
    <img className={styles.card__img} src={dom01img} alt="Dom" />
    <div className={styles.card__body}>
    <div className={styles.card__text}>
        <div className={styles.card__title}>Название&Название</div>
        <div className={styles.card__muted}>Описание...</div>
     </div>
        <button className={styles.card__icon}>
    <img src={arrowimg} alt="Open" />
        </button>
    </div>
  </div>
   ) 
}
 
export default Card;