import React from 'react';
import './projectspage.css';
import Projectcard from '../../components/projectcard/Projectcard';
import Footer from '../../components/footer/Footer';

const Projectspage = () => {
    return <>
    <section className='projectspage'>
      <div className="container">
        <div className="projectspage__header">
  
          <h2 className="title-2">Наши проекты</h2>
  
        </div>
        <div className="projectspage__card">

          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />

        </div>
      </div>
    </section>;
    <Footer />
    </>
  }
   
  export default Projectspage;