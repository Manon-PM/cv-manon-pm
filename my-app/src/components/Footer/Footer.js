import './Footer.scss';

// Images
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import mail from '../../assets/images/plane.png';

// Dark mode images
import linkedinDark from '../../assets/images/linkedin_dark-mode.png';
import githubDark from '../../assets/images/github_dark-mode.png';
import mailDark from '../../assets/images/plane_dark-mode.png';

function Footer({ darkMode }) {
    return (
        <footer>
            <div className="contact-container">
                <div className="social-buttons">
                    <button className="footer-button linkedin">
                        <a href="https://www.linkedin.com/in/manon-p-m/" target="_blank" rel="noopener noreferrer"><img src={darkMode ? linkedinDark : linkedin} alt="LinkedIn" className="linkedin-icon" /></a>
                    </button>
                    <button className="footer-button github">
                        <a href="https://github.com/Manon-PM" target="_blank" rel="noopener noreferrer"><img src={darkMode ? githubDark : github} alt="GitHub" className="github-icon" /></a>
                    </button>
                </div>
                <div className="email">
                    <a href="mailto:manon.pms@gmail.com">
                        <button className="footer-button mail">
                            <img src={darkMode ? mailDark : mail} alt="Email" className="mail-icon" />
                        </button>
                        Contactez-moi
                    </a>
                </div>
            </div>

            <p className="credits">
                <span className="made-by">Manon Pons-Mazars - 2023</span>
                <span className="icons-bg">Icônes créées par Freepik - Flaticon, éditées par mes soins. Backgrounds créés avec Haikei</span>
            </p>
        </footer>
    );
};

export default Footer;