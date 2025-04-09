import Map from '../mapcard/Map';
import './requisite.css';
import inst from "./../../img/icon/instagram.png";
import face from "./../../img/icon/facebook.png";
import twit from "./../../img/icon/twitter.png";

const Requisite = () => {
    return ( 
        <section className="requisite" id="requisite">
            <div className="container">
                <div className="requi__header">
                    <h2 className="title-2">Реквизиты</h2>
                </div>
                
                <div className="requi__content">
                    <div className="requi__block">
                        <h3>Наши контакты</h3>
                        <ul>
                            <li><span>📬</span> gisprokg@gmail.com</li>
                            <li><span>📞</span>+996 700 600 645</li>
                            <li><span>📞</span>+996 700 600 645</li>
                            <li><span>📞</span>+996 700 600 645</li>
                        </ul>
                    </div>
                    <div className="requi__block">
                        <h3>Наши соц. сети</h3>
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
                            <li>
                                <a href="https://twitter.com/gispro_kg/" target="_blank" rel="noopener noreferrer">
                                    <img src={twit} alt="Twitter" />
                                </a>
                                Twitter
                            </li>
                        </ul>
                    </div>
                    <div className="requi__block">
                        <h3>Наш адрес</h3>
                        <ul>
                            <li><span>📍</span> г. Бишкек, ул. Токтоналиева 4Б</li>
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


