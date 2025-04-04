import './monitoring.css'
import Map from "../../components/mapcard/Map";
import Footer from "../../components/footer/Footer";
import Monitoringmap from '../../components/monitoringmap/Monitoringmap';

const Monitoring = () => {
    return  <>
        <section className="monitor">
            <div className="container">
                <div className="monitor__header">

                <h2 className="title-2">Мониторинг</h2>

            </div>
                <div className="monitor__map">

                    <Monitoringmap />


                </div>
            </div>
        </section>
    <Footer />
    </>
     
}
 
export default Monitoring
