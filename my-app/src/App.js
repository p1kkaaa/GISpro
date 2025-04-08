import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header"
import Parallax from "./components/parallax/Parallax";
import News from "./components/news/News";
import Services from "./components/services/Services";
import About from "./components/aboutus/About";
import Projects from "./components/projects/Projects";
import Achievement from "./components/achievement/Achievement";
import Partners from "./components/partners/Partners";
import Requisite from "./components/requisite/Requisite";
import Footer from "./components/footer/Footer";
import Projectspage from "./pages/projectspage/Projectspage";
import Newspage from "./pages/newspage/Newspage";
import Monitoring from "./pages/monitoringpage/Monitoring";


function MainPage() {
  return (
    <>
      <Header />
      <Parallax />
      <News />
      <Services />
      <About />
      <Projects />
      <Achievement />
      <Partners />
      <Requisite />
      <Footer />

    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/newspage" element={<Newspage />} />
          <Route path="/projectpage" element={<Projectspage />} /> 
          <Route path="/monitoringpage" element={<Monitoring /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



