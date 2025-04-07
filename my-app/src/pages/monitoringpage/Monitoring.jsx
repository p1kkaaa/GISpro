import './monitoring.css'
import Footer from "../../components/footer/Footer";
import MonitoringL from '../monitoringmap/MonitoringL';



const Monitoring = () => {
    return  <>
        <section className="monitor">
            <div className="container">
                <div className="monitor__header">

                <h2 className="title-2">Мониторинг</h2>

            </div>
                <div className="monitor__map">

                <MonitoringL />

                </div>
            </div>
        </section>
    <Footer />
    </>
     
}
 
export default Monitoring
