import { useState } from 'react';

import './AboutMe.scss';

import gps from '../../assets/images/gps.png';
import age from '../../assets/images/calendar.png';
import retraining from '../../assets/images/retraining.png';
import accessibility from '../../assets/images/accessibility.png';

function AboutMe() {

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
            <h3 className="aboutme-title">À propos de moi</h3>
            <div className="aboutme-container">
                <section className="aboutme-infos">
                    <div className="infos-item">
                        <img src={gps} alt="Localisation" className="infos-img"/>
                        <p className="infos-text">Calmont (12), Occitanie</p>
                    </div>
                    <div className="infos-item">
                        <img src={age} alt="Âge" className="infos-img"/>
                        <p className="infos-text">27 ans</p>
                    </div>
                    <div className="infos-item">
                        <img src={retraining} alt="Reconversion professionnelle" className="infos-img"/>
                        <p className="infos-text">En reconversion professionnelle</p>
                    </div>
                    <div className="infos-item">
                        <img src={accessibility} alt="Accessibilité" className="infos-img"/>
                        <p className="infos-text">Autiste Asperger (RQTH en attente)</p>
                    </div>
                </section>
                <hr/>
                <section className="aboutme-other">
                    <h5 className="other-title" onClick={() => {sectionToDisplay(1)}}>Mon parcours</h5>
                    {selectedSection === 1 && (
                        <p className="other-text">
                            Mon parcours est assez atypique. J’ai suivi une formation hybride pour devenir Professeure des écoles (licence de Biologie puis licence de Lettres et enfin Master MEEF), acquérant ainsi la rigueur des sciences et la culture des lettres.<br />
                            Malheureusement, le cadre de l’Education Nationale ne m’a pas convenu et j’ai décidé de laisser parler mon appétence pour l’informatique en me tournant vers le Développement web. Aujourd’hui, je n’ai aucun regret : j’ai trouvé ma voie !
                        </p>
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