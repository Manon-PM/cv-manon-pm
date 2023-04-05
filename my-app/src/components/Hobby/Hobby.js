import './Hobby.scss';

// Images
import cosplay from '../../assets/images/cosplay.png';
import jv from '../../assets/images/hobbies.png';
import poetry from '../../assets/images/poetry.png';
// Dark mode images
import cosplayDark from '../../assets/images/cosplay_dark-mode.png';
import jvDark from '../../assets/images/hobbies_dark-mode.png';
import poetryDark from '../../assets/images/poetry_dark-mode.png';

function Hobby( { darkMode } ) {
    return (
        <div className="hobby">
            <h3 className="hobby-title">Loisirs</h3>
            <div className="hobby-container">
                <section className="hobby-item-cosplay">
                    <div className="hobby-item">
                        <img src={darkMode ? cosplayDark : cosplay} alt="Cosplay" className="hobby-item-cosplay-img" />
                        <h4 className="hobby-item-title"><a href="https://fr.wikipedia.org/wiki/Cosplay" target="_blank" rel="noopener noreferrer">Cosplay</a></h4>
                    </div>
                    <p>Loisir qui consiste à créer le costume d'un personnage de fiction et l'interpréter.</p>
                    <p>Implique la pratique des activités suivantes :</p>
                    <div className="cosplay-skills">
                        <ul className="cosplay-skills-list">
                            <li className="cosplay-skills-item">Couture</li>
                            <li className="cosplay-skills-item">Bricolage</li>
                            <li className="cosplay-skills-item">Peinture</li>
                            <li className="cosplay-skills-item">Logiciels d'édition d'images (Photoshop) et de sons (Audacity)</li>
                            <li className="cosplay-skills-item">Mise en scène</li>
                            <li className="cosplay-skills-item-last">Théâtre</li>
                        </ul>
                    </div>
                </section>
                <section className="hobby-item">
                        <img src={darkMode ? jvDark : jv} alt="Jeux vidéos" className="hobby-item-img" height="32px" />
                        <h4 className="hobby-item-title">Jeux vidéos</h4>
                </section>
                <section className="hobby-item">
                    <img src={darkMode ? poetryDark : poetry} alt="Ecriture poétique" className="hobby-item-img" />
                    <h4 className="hobby-item-title">Ecriture poétique</h4>
                </section>
            </div>
        </div>
    );
};

export default Hobby;