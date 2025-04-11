import Map from '../mapcard/Map';
import './requisite.css';
import inst from "./../../img/icon/instagram.png";
import face from "./../../img/icon/facebook.png";
import mail from "./../../img/icon/gmail.png";


const Requisite = () => {
    return ( 
        <section className="requisite" id="requisite">
            <div className="container">
                <div className="requi__header">
                    <h2 className="title-2">Реквизиты</h2>
                </div>
                
                <div className="requi__content">
                    
                    <div className="requi__block">
                        <h3>Контакты:</h3>
                        <ul>
                            <li><span>📞</span>+996 700 600 645</li>
                            <li><span>📞</span>+996 508 598 887</li>
                            <li><span>📞</span>+996 771 777 787</li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>Соц. сети:</h3>
                        <ul className="social-links">
                            <li>
                                <a href="https://www.instagram.com/gispro.kg/" target="_blank" rel="noopener noreferrer">
                                    <img src={inst} alt="Instagram" />
                                </a>
                                Instagram
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gispro.kg/" target="_blank" rel="noopener noreferrer">
                                    <img src={face} alt="Facebook" />
                                </a>
                                Facebook
                            </li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>Адрес:</h3>
                        <ul>
                            <li><span>📍</span> г. Бишкек, ул. Токтоналиева 4Б</li>
                            <li><span>🗓️</span>с Пн-Пт 09:00-18:00</li>
                        </ul>
                    </div>

                    <div className="requi__block">
                        <h3>Email:</h3>
                        <ul>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src={mail} alt="Twitter" />
                                </a>
                                gispro51@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="requi__map">
                            <Map />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Requisite;


