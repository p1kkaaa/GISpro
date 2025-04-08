import Map from '../mapcard/Map';
import './requisite.css'

const Requisite = () => {
    return ( 
        <section className="requisite" id="requisite">
            <div className="container">
                <div className="requi__header">

                <h2 className="title-2">Реквизиты</h2>

                </div>
                
                    <div className="requi__content">

                    <div className="requi__text">
                        <ul>
                        <li><span>📍</span> г. Бишкек, ул. Токтоналиева 4Б</li>
                        <li><span>📬</span> gisprokg@gmail.com</li>
                        <li><span>📞</span>+996 700 600 645</li>
                        <li><span>📞</span>+996 700 600 645</li>
                        <li><span>📞</span>+996 700 600 645</li>
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
 
export default Requisite
