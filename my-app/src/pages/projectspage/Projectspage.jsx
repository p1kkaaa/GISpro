import React from 'react';
import './projectspage.css';
import Projectcardpage from '../projectcardpage/Projectcardpage';
import Footerpage from '../footerpage/Footerpage';

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
    <Footerpage />
    </>
  }
   
  export default Projectspage;