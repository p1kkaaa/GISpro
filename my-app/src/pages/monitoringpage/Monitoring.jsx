import './monitoring.css'
import Footer from "../../components/footer/Footer";
import MonitoringL from '../monitoringmap/MonitoringL';
import MonitoringLnofunc from '../monitoringmap/MonitoringLnofunc';



const Monitoring = () => {
    return  <>
        <section className="monitor">
            <div className="container">
                <div className="monitor__header">

                <h2 className="title-2">Мониторинг</h2>

            </div>
                <div className="monitor__map">

                <MonitoringL />
                {/* <MonitoringLnofunc /> */}

                </div>
            </div>
        </section>
    <Footer />
    </>
     
}
 
export default Monitoring
