import { useState } from 'react';

import './Experience.scss';

// Image
import chevron from '../../assets/images/chevron.png';
import scriptorium from '../../assets/images/le-scriptorium.png';
// Dark mode image
import chevronDark from '../../assets/images/chevron_dark-mode.png';

function Experience({ darkMode }) {

    const [selectedSection, setSelectedSection] = useState(0);

    const sectionExperienceToDisplay = (num) => {
        if (num !== selectedSection) {
            setSelectedSection(num);
        } else {
            setSelectedSection(0);
        }
    };

    return (
        <div className="experience">
            <h3 className="experience-title">Expériences</h3>
            <h2>Développement Web</h2>
            <div className="experience-container">
                <section className="experience-item">
                    <h4 className="experience-item-title">Projet de formation - <a href="https://github.com/Manon-PM/le-scriptorium-front" target="_blank" rel="noopener noreferrer">Le Scriptorium</a></h4>
                    <div className="subtitles">
                        <p className="item-date">2023</p>
                        <p className="item-org">- Ecole O'clock</p>
                    </div>
                    <div className="experience-content">
                        <div className="experience-item-container">
                            <img src={scriptorium} alt="Représentation du projet" className="experience-item-img" />
                            <button className="experience-item-btn" onClick={() => {sectionExperienceToDisplay(1)}}>
                                <img src={darkMode ? chevronDark : chevron} alt="Flèche de déroulement" className={selectedSection === 1 ? "chevron chevron-open" : "chevron"} />
                            </button>
                        </div>
                        {selectedSection === 1 && (
                            <div className="experience-item-description">
                                <h5 className="experience-description-title">Le Scriptorium</h5>
                                <p className="content">
                                    Le Scriptorium est un générateur de fiches de personnage pour un jeu de rôle français nommé "Chroniques Oubliées", réalisé avec 4 autres apprenants sur un mois, dans des conditions professionnelles. Notre équipe était constituée de 3 développeurs côté back-end et 2 côté front-end.</p>
                                <p className="content">
                                    Après avoir construit sa fiche, l'utilisateur peut la télécharger au format PDF. S'il est inscrit, elle est également stockée dans son espace personnel pour être éventuellement téléchargée à nouveau, modifiée ou supprimée ultérieurement.
                                </p>
                                <h5 className="experience-description-title">Savoirs développés</h5>
                                <ul className="content">
                                    <li className="content-item">
                                        <h6 className="content-item-title">Compétences front-end</h6>
                                        <ul>
                                            <li className="content-subitem">HTML</li>
                                            <li className="content-subitem">CSS/SCSS</li>
                                            <li className="content-subitem">JavaScript</li>
                                            <li className="content-subitem">React
                                                <ul>
                                                    <li className="content-subitem-react">Context</li>
                                                    <li className="content-subitem-react">React Router</li>
                                                    <li className="content-subitem-react">Swiperjs</li>
                                                    <li className="content-subitem-react">MUI...</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="content-item">
                                        <h6 className="content-item-title">Outils organisationnels</h6>
                                        <ul>
                                            <li className="content-subitem">Git/GitHub</li>
                                            <li className="content-subitem">Trello</li>
                                            <li className="content-subitem">Slack</li>
                                            <li className="content-subitem">Discord</li>
                                            <li className="content-subitem">Gloomaps</li>
                                            <li className="content-subitem">Balsamiq</li>
                                            <li className="content-subitem">Whimsical</li>
                                        </ul>
                                    </li>
                                    Enfin, j'ai appris à travailler en équipe, à communiquer à distance et à gérer un projet.
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
                <section className="experience-item">
                    <h4 className="experience-item-title"><a href="https://github.com/Manon-PM/cv-manon-pm" target="_blank" rel="noopener noreferrer">Le présent CV numérique</a></h4>
                    <div className="subtitles">
                        <p className="item-date">2023</p>
                        <p className="item-org">- Projet personnel</p>
                    </div>
                    <div className="experience-item-container">
                    <img src={darkMode ? "https://fakeimg.pl/900x255/1b194f/b4abeb/?text=Bienvenue%20sur%20mon%20CV" : "https://fakeimg.pl/900x255/d98c65/1b194f/?text=Bienvenue%20sur%20mon%20CV"} alt="Représentation du projet" className="experience-item-img" />
                        <button className="experience-item-btn" onClick={() => {sectionExperienceToDisplay(2)}}>
                            <img src={darkMode ? chevronDark : chevron} alt="Flèche de déroulement" className={selectedSection === 2 ? "chevron chevron-open" : "chevron"} />
                        </button>
                    </div>
                    {selectedSection === 2 && (
                        <div className="experience-item-description">
                            <p className="content">
                                Ce CV numérique me sert de carte de visite assez complète tout en me permettant d'appliquer ce que j'ai vu durant ma formation, de rechercher de nouvelles fonctionnalités et de m'entraîner au responsive, au mode sombre, aux animations et aux affichages/masquages de contenus.</p>
                            <h5 className="experience-description-title">Savoirs développés</h5>
                            <ul className="content">
                                <li className="content-subitem">Manipulation de React</li>
                                <li className="content-subitem">Approfondissement des media queries</li>
                                <li className="content-subitem">Utilisation des transitions</li>
                            </ul>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Experience;