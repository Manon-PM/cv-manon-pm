import { useState } from 'react';

import './Training.scss';

import oclock from '../../assets/images/oclock.jpg';

function Training() {

    const [selectedSection, setSelectedSection] = useState(0);

    const sectionTrainingToDisplay = (num) => {
        if (num !== selectedSection) {
            setSelectedSection(num);
        } else {
            setSelectedSection(0);
        }
    };

    return (
        <div className="training">
            <h3 className="training-title" onClick={() => {sectionTrainingToDisplay(0)}}>Formation</h3>
            <h2>Développement Web</h2>
            <div className="training-container">
                <h4 className="training-title">Formation Développeur Web</h4>
                <div className="subtitles">
                    <p className="item-date">2022 - 2023</p>
                    <p className="item-org">- Ecole O'clock</p>
                </div>
                <img src={oclock} alt="Logo d'O'clock" className={selectedSection === 0 ? "training-logo" : "training-logo training-logo-little"} />
                <section className="training-description">
                    <div className="training-school">
                        <h5 className="training-description-title" onClick={() => {sectionTrainingToDisplay(1)}}>Présentation de l'école</h5>
                        {selectedSection === 1 && (
                            <p className="content">
                                O'clock est une école en téléprésentiel labellisée Grande Ecole du Numérique, proposant des formations centrées sur le développement web. Les cours dispensés sont synchrones et mettent en valeur la pratique et les notions réellement utiles sur le terrain.
                            </p>
                        )}
                    </div>
                    <div className="training-program">
                        <h5 className="training-description-title" onClick={() => {sectionTrainingToDisplay(2)}}>Programme</h5>
                        {selectedSection === 2 && (
                            <ul className="training-list content">
                                <li className="training-list-item">Socle PHP et bases de JavaScript</li>
                                <li className="training-list-item">6 mois</li>
                                <li className="training-list-item">Téléprésentiel (à distance, mais synchrone)</li>
                                <li className="training-list-item">35h/semaine</li>
                                <li className="training-list-item">Détails :
                                    <ul className="training-details">
                                        <li className="training-details-item">Socle : 476h</li>
                                        <li className="training-details-item">Spécialisation React : 168h</li>
                                        <li className="training-details-item">Projet : 154h</li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="training-certifications">
                        <h5 className="training-description-title" onClick={() => {sectionTrainingToDisplay(3)}}>Certifications</h5>
                        {selectedSection === 3 && (
                            <p className="content">En préparation ! &#128170;</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Training;