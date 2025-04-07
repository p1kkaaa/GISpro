import bag from './../../img/objectlogo/bag.png'
import clock from './../../img/objectlogo/ClockHistory.png'
import person from './../../img/objectlogo/PersonCheck.png'
import './achievement.css'


const Achievement = () => {
    return (  
        <section className="achiev-block">
      <h3 className="title-2">Наши достижения</h3>
      <div className="achiev-row">
        <div className="achiev-item">
          <img src= { bag } alt="Иконка часов" />
          <h4 className="counter">11 лет</h4>
          <p>Опыт на рынке</p>
        </div>
        <div className="achiev-item">
          <img src= { clock } alt="Иконка портфеля" />
          <h4 className="counter">100+</h4>
          <p>Успешных проектов</p>
        </div>
        <div className="achiev-item">
          <img src= { person } alt="Иконка человека" />
          <h4 className="counter">1200+</h4>
          <p>Довольных клиентов</p>
        </div>
      </div>
    </section>
    );
}
 
export default Achievement;