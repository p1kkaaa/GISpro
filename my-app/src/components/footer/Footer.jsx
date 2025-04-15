import './footer.css'



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
            </div>
        </div>
     );
}
 
export default Footer;