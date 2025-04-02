import About from "./components/aboutus/About";
import Achievement from "./components/achievement/Achievement";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Parallax from "./components/parallax/Parallax";
import Partners from "./components/partners/Partners";
import Projects from "./components/projects/Projects";
import Requisite from "./components/requisite/Requisite";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">

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

    </div>
  
  );
}

export default App;
