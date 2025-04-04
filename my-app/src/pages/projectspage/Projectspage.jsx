import React from 'react';
import './projectspage.css';


import Footer from '../../components/footer/Footer';
import Projectcardpage from '../projectcardpage/Projectcardpage';

const Projectspage = () => {
    return <>
    <section className='projectspage'>
      <div className="container">
        <div className="projectspage__header">
  
          <h2 className="title-2">Наши проекты</h2>
  
        </div>
        <div className="projectspage__card">

          <Projectcardpage />
          <Projectcardpage />
          <Projectcardpage />
          <Projectcardpage />


        </div>
      </div>
    </section>;
    <Footer />
    </>
  }
   
  export default Projectspage;