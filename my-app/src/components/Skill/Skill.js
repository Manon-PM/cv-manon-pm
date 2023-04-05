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
                    <ul className="skill-list">
                        <li className="skill-list-item">HTML</li>
                        <li className="skill-list-item">CSS/SCSS</li>
                        <li className="skill-list-item">JavaScript</li>
                        <li className="skill-list-item">React</li>
                        <li className="skill-list-item">MUI/Bootstrap</li>
                    </ul>
                )}
                <h5 onClick={() => {skillToDisplay(2)}}>Back-end</h5>
                {selectedSkill === 2 && (
                    <ul className="skill-list">
                        <li className="skill-list-item">PHP</li>
                        <li className="skill-list-item">MySQL</li>
                        <li className="skill-list-item">Outils de gestion de bases de données (Adminer, phpMyAdmin)</li>
                        <li className="skill-list-item">Design pattern MVC</li>
                    </ul>
                )}
                <h5 onClick={() => {skillToDisplay(3)}}>Compétences techniques globales</h5>
                {selectedSkill === 3 && (
                    <ul className="skill-list">
                        <li className="skill-list-item">Programmation Orientée Objet</li>
                        <li className="skill-list-item">Notions en sécurité et droits d'accès</li>
                        <li className="skill-list-item">Outil de gestion de versions<br />(Git)</li>
                        <li className="skill-list-item">Outils de gestion de projets<br />(GitHub, Trello, Slack, Discord)</li>
                        <li className="skill-list-item">Outils de gestion de workflow<br />(Gloomaps, Balsamiq, Whimsical)</li>
                    </ul>
                )}
                <div className="skill-other">
                    <p className="skill-item">+ Anglais écrit niveau B2</p>
                    <p className="skill-item">+ Très bon niveau en français</p>
                </div>
            </section>
        </div>
    );
};

export default Skill;