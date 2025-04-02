import styles from './Projectcard.module.css';
import bg05img from './../../img/photo/bg5.jpg'
import arrowimg from './../../img/icon/arrow.svg'


const Projectcard = () => {
  return  <div className={styles.projectcard}>
    <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
    <div className={styles.projectcard__body}>
    <div className={styles.projectcard__text}>
        <div className={styles.projectcard__title}>Название&Название</div>
        <div className={styles.projectcard__muted}>Описание...</div>
     </div>
        <button className={styles.card__icon}>
    <img src={arrowimg} alt="Open" />
        </button>
    </div>
  </div>
}
 
export default Projectcard;