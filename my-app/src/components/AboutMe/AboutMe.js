import { useState } from 'react';

import './AboutMe.scss';

// Images
import gps from '../../assets/images/gps.png';
import email from '../../assets/images/email.png';
import age from '../../assets/images/calendar.png';
import retraining from '../../assets/images/retraining.png';
import accessibility from '../../assets/images/accessibility.png';
// Dark mode images
import gpsDark from '../../assets/images/gps_dark-mode.png';
import emailDark from '../../assets/images/email_dark-mode.png';
import ageDark from '../../assets/images/calendar_dark-mode.png';
import retrainingDark from '../../assets/images/retraining_dark-mode.png';
import accessibilityDark from '../../assets/images/accessibility_dark-mode.png';

function AboutMe({ darkMode }) {

    const [selectedSection, setSelectedSection] = useState(0);

    const sectionToDisplay = (num) => {
        if (num !== selectedSection) {
            setSelectedSection(num);
        } else {
            setSelectedSection(0);
        }
    };

    return (
        <div className="aboutme">
            <h3 className="aboutme-title" onClick={() => {sectionToDisplay(0)}}>À propos de moi</h3>
            <div className="aboutme-container">
            {selectedSection === 0 && (
                <section className="aboutme-infos">
                    <div className="infos-item">
                        <img src={darkMode ? gpsDark : gps} alt="Localisation" className="infos-img"/>
                        <p className="infos-text">Calmont (12), Occitanie</p>
                    </div>
                    <div className="infos-item">
                        <img src={darkMode ? emailDark : email} alt="Email" className="infos-img"/>
                        <a href="mailto:manon.pms@gmail.com" className="infos-text">manon.pms@gmail.com</a>
                    </div>
                    <div className="infos-item">
                        <img src={darkMode ? ageDark : age} alt="Âge" className="infos-img"/>
                        <p className="infos-text">27 ans</p>
                    </div>
                    <div className="infos-item">
                        <img src={darkMode ? retrainingDark : retraining} alt="Reconversion professionnelle" className="infos-img"/>
                        <p className="infos-text">En reconversion professionnelle</p>
                    </div>
                    <div className="infos-item">
                        <img src={darkMode ? accessibilityDark : accessibility} alt="Accessibilité" className="infos-img"/>
                        <p className="infos-text">Autiste Asperger (RQTH en attente)</p>
                    </div>
                </section>
            )}
                <section className="aboutme-other">
                    <h5 className="other-title" onClick={() => {sectionToDisplay(1)}}>Mon parcours</h5>
                    {selectedSection === 1 && (
                        <div className="other-text">
                            <p className="other-text-p">Mon parcours est assez atypique.</p><br />
                            <p className="other-text-p">J’ai suivi une formation hybride pour devenir <strong>Professeure des écoles</strong> :</p>
                            <ul className="other-training">
                                <li className="other-training-item">Licence de Biologie</li>
                                <li className="other-training-item">Licence de Lettres</li>
                                <li className="other-training-item meef-container">
                                    <li className="meef">Master MEEF</li>
                                    <div className="meef-details">(Métiers de l'Enseignement, de l'Education et de la Formation)</div>
                                </li>
                            </ul>
                            <p className="other-text-p">Tout ceci m'a permis d'acquérir la <strong>rigueur des sciences</strong> et la <strong>culture des lettres</strong>, ainsi qu'une <strong>façon de penser et de voir le monde polyvalente</strong>.</p><br />
                            <p className="other-text-p">Malheureusement, le cadre de l’Education Nationale ne m’a pas convenu. J'aspirais à une plus grande liberté d'expression.</p><br />
                            <p className="other-text-p">C'est pourquoi j’ai décidé de laisser parler mon appétence pour l’informatique en me tournant vers le Développement web grâce à une formation intensive proposée par l'école O'clock. Aujourd’hui, je n’ai aucun regret : j’ai trouvé ma voie !</p>
                        </div>
                    )}
                    <h5 className="other-title" onClick={() => {sectionToDisplay(2)}}>Softskills</h5>
                    {selectedSection === 2 && (
                        <ul className="softskills-list">
                            <li className="softskill-item">Curiosité</li>
                            <p className="softskill-text">L'envie de savoir et d'aller plus loin, puis de partager ces connaissances</p>
                            <li className="softskill-item">Rigueur</li>
                            <p className="softskill-text">Un travail propre et bien fait est un travail efficace</p>
                            <li className="softskill-item">Ingéniosité</li>
                            <p className="softskill-text">Retourner un problème jusqu'à trouver une bonne solution</p>
                            <li className="softskill-item">Créativité</li>
                            <p className="softskill-text">Retourner un problème jusqu'à trouver une solution originale et adaptée</p>
                            <li className="softskill-item">Bienveillance</li>
                            <p className="softskill-text">Parce qu'être gentil sans arrière-pensée se perd</p>
                            <li className="softskill-item">Ouverture d'esprit</li>
                            <p className="softskill-text">Chacun a le droit d'avoir ses propres valeurs</p>
                            <li className="softskill-item">Patience</li>
                            <p className="softskill-text">Même après des heures à chercher où il manque ce fameux point-virgule</p>
                            <li className="softskill-item">Humilité</li>
                            <p className="softskill-text">La route de l'apprentissage est infinie et les points de vue le sont aussi</p>
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};

export default AboutMe;