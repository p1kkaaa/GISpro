import './footer.css'
import inst from "./../../img/icon/instagram.png"
import face from "./../../img/icon/facebook.png"


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer__text">
                2025 © GIS PRO. Все права защищены.
                </div>
                <button className="scroll" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Вернуться к началу
                </button>
                <div className="social__btn">
                    <a href="https://www.instagram.com/gispro.kg/"><img src= {inst} alt="" /></a>
                    <a href="https://www.facebook.com/people/Gis-Pro-Kg/pfbid02cBu35SL2TeGDx8wRK5uigZs46pDcdJHMsbZHjjdhuSLbZCHE8nwULsMrk1yoCyhEl/?refsrc=deprecated" ><img src= {face} alt="" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;