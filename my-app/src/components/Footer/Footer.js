import './Footer.scss';

import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import mail from '../../assets/images/plane.png';

function Footer() {
    return(
        <footer className="footer">
            <div className="contact-container">
                <button className="footer-button linkedin">
                    <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
                </button>
                <button className="footer-button github">
                    <img src={github} alt="GitHub" className="github-icon" />
                </button>
                <div className="email">
                    <p>Contactez-moi</p>
                    <button className="footer-button mail">
                        <img src={mail} alt="Email" className="mail-icon" />
                    </button>
                </div>
            </div>

            <p className="credits">
                <span className="made-by">Manon Pons-Mazars - 2023</span>
                <span className="icons-bg">Icônes créées par Freepik - Flaticon, éditées par mes soins. Backgrounds créés avec Haikei.</span>
            </p>
        </footer>
    );
};

export default Footer;