import './newspage.css'

import Footer from '../../components/footer/Footer';
import Cardpage from '../cardpage/Cardpage';

const Newspage = () => {
    return <>
    <section className='newspage'>
      <div className="container">
        <div className="newspage__header">
  
          <h2 className="title-2">Новости</h2>
  
        </div>
        <div className="newspage__card">

          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />
          <Cardpage />


        </div>
      </div>
    </section>
    <Footer />
    </>
  }
   
  export default Newspage;