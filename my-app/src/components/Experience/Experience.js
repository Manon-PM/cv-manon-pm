import { useState } from 'react';

import './Experience.scss';

// Image
import chevron from '../../assets/images/chevron.png';
// Dark mode image
import chevronDark from '../../assets/images/chevron_dark-mode.png';

function Experience({ darkMode }) {

    const [open, setopen] = useState(false);

    const chevronClassNames = open ? 'chevron chevron-open' : 'chevron';

    const toggleDescription = () => {
        setopen(!open);
    }

    return (
        <div className="experience">
            <h3 className="experience-title">Expériences</h3>
            <h2>Développement Web</h2>
            <div className="experience-container">
                <section className="experience-item">
                    <h5 className="experience-item-title">Projet de fin de formation</h5>
                    <p className="experience-item-date">2023</p>
                    <p className="experience-item-org">- O'clock</p>
                    <img src="#" alt="Représentation du projet" className="experience-item-img" />
                    <button className="experience-item-btn" onClick={toggleDescription}>
                        <img src={darkMode ? chevronDark : chevron} alt="Flèche de déroulement" className={chevronClassNames} />
                    </button>
                    {open && (
                        <div className="experience-item-description">
                            <h5 className="experience-description-title">Le Scriptorium</h5>
                            <p className="experience-description-content">
                                Le Scriptorium est un générateur de fiches de personnage pour un jeu de rôle français nommé "Chroniques Oubliées", réalisé avec 4 autres apprenants sur un mois, dans des conditions professionnelles. Après avoir construit sa fiche, l'utilisateur peut la télécharger au format PDF. S'il est inscrit, elle est également stockée dans son espace personnel pour être éventuellement téléchargée à nouveau, modifiée ou supprimée ultérieurement.
                            </p>
                            <h5 className="experience-description-title">Savoirs acquis</h5>
                            <p className="experience-description-content">
                                Ce projet m'a permis de développer mes compétences en développement front-end (HTML, CSS/SCSS, JavaScript, React), partie sur laquelle j'ai travaillé en binôme. J'ai également pu découvrir des outils de React tels que Context, Swiper ou la librairie MUI et approfondir mes connaissances en outils organisationnels (Git, GitHub, Trello, Slack, Discord, Gloomaps, Balsamiq, Whimsical). Enfin, j'ai appris à travailler en équipe, à communiquer à distance et à gérer un projet.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Experience;