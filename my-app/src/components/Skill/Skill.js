import { useState } from 'react';

import './Skill.scss';

function Skill() {

    const [selectedSkill, setSelectedSkill] = useState(0);

    const skillToDisplay = (num) => {
        if (num !== selectedSkill) {
            setSelectedSkill(num);
        } else {
            setSelectedSkill(0);
        }
    };

    return (
        <div className="skill">
            <h3 className="skill-title">Compétences</h3>
            <h2>Développement Web</h2>
            <section className="skill-container">
                <h5 onClick={() => {skillToDisplay(1)}}>Front-end</h5>
                {selectedSkill === 1 && (
                    <ul className="skill-list-front">
                        <li className="skill-item">HTML</li>
                        <li className="skill-item">CSS/SCSS</li>
                        <li className="skill-item">JavaScript</li>
                        <li className="skill-item">React</li>
                        <li className="skill-item">MUI/Bootstrap</li>
                    </ul>
                )}
                <h5 onClick={() => {skillToDisplay(2)}}>Back-end</h5>
                {selectedSkill === 2 && (
                    <ul className="skill-list-back">
                        <li className="skill-item">PHP</li>
                        <li className="skill-item">MySQL</li>
                        <li className="skill-item">Outils de gestion de bases de données (Adminer, phpMyAdmin)</li>
                        <li className="skill-item">Design pattern MVC</li>
                    </ul>
                )}
                <h5 onClick={() => {skillToDisplay(3)}}>Compétences techniques globales</h5>
                {selectedSkill === 3 && (
                    <ul className="skill-list-other">
                        <li className="skill-item">Programmation Orientée Objet</li>
                        <li className="skill-item">Notions en sécurité et droits d'accès</li>
                        <li className="skill-item">Outil de gestion de versions (Git)</li>
                        <li className="skill-item">Outils de gestion de projets (GitHub, Trello, Slack, Discord)</li>
                        <li className="skill-item">Outils de gestion de workflow (Gloomaps, Balsamiq, Whimsical)</li>
                    </ul>
                )}
                <p className="skill-item">+ Anglais écrit niveau B2</p>
                <p className="skill-item">+ Très bon niveau en français</p>
            </section>
        </div>
    );
};

export default Skill;