import styles from './Projectcardpage.module.css';
import bg05img from './../../img/photo/bg5.jpg'



const Projectcardpage = () => {
  return  <div className={styles.projectcard}>
    <img className={styles.projectcard__img} src={bg05img} alt="Dom" />
    <div className={styles.projectcard__body}>
    <div className={styles.projectcard__text}>
        <div className={styles.projectcard__title}>Название&Название</div>
        <div className={styles.projectcard__muted}>Описание...</div>
     </div>
      
    </div>
  </div>
}
 
export default Projectcardpage;

