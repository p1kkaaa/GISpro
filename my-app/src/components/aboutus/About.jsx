import './about.css'

const About = () => {
    return ( <section className="about">
        <div className="container">
            <div className="about__header">

                <h2 className="title-2">О нас</h2>

            </div>
        <div className="about__text">
             <ul>
                <li>Мы создаем инновационные решения в области</li>
                <li>землеустройства и архитектурного проектирования, основываясь</li>
                <li> на многолетнем опыте и высоких стандартах качества.</li>
            </ul>
        </div>
        </div>
    </section> 
    );
}
 
export default About;