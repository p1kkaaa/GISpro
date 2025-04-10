import './about.css'

const About = () => {
    return ( <section className="about" id="about">
        <div className="container">
            <div className="about__header">

                <h2 className="title-2">О нас</h2>

            </div>
        <div className="about__text">
             <ul>
                <li>Наша компания — команда специалистов, объединённых стремлением создавать технологичные и эффективные решения в сфере информационных технологий, геоинформационных систем и проектирования.</li>
                <li>Мы предоставляем полный цикл услуг — от идеи и анализа до разработки, внедрения и сопровождения. Наш подход сочетает инженерную точность, современные IT-решения и глубокое понимание бизнес-задач клиентов.</li>
                <li>Мы уверенно реализуем как цифровые проекты (веб-сервисы, мобильные приложения, ГИС-платформы), так и сложные инфраструктурные и строительные задачи: от топографической съёмки до проектирования и возведения зданий.</li>
                <li>Наша цель — не просто выполнить работу, а создать решение, которое приносит реальную ценность. Работаем честно, надёжно и всегда на результат.</li>
            </ul>
        </div>
        </div>
    </section> 
    );
}
 
export default About;