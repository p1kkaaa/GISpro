import './newspage.css'
import Card from "../../components/card/Card";
import Footer from '../../components/footer/Footer';

const Newspage = () => {
    return <>
    <section className='newspage'>
      <div className="container">
        <div className="newspage__header">
  
          <h2 className="title-2">Новости</h2>
  
        </div>
        <div className="newspage__card">

         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />

        </div>
      </div>
    </section>
    <Footer />
    </>
  }
   
  export default Newspage;