import './monitoring.css'

import MonitoringL from '../monitoringmap/MonitoringL';
import MonitoringLnofunc from '../monitoringmap/MonitoringLnofunc';
import Footerpage from '../footerpage/Footerpage';



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
        <Footerpage />
    </>
     
}
 
export default Monitoring
