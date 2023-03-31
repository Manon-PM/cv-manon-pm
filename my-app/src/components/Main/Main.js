import { useState } from 'react';

import './Main.scss';

import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Hobby from '../Hobby/Hobby';
import Skill from '../Skill/Skill';
import Training from '../Training/Training';

import photo from '../../assets/images/avatar.jpg';
import formation from '../../assets/images/training.png';
import skills from '../../assets/images/skills.png';
import aboutMe from '../../assets/images/about-me.png';
import hobbies from '../../assets/images/hobbies.png';
import experience from '../../assets/images/portfolio.png';

function Main() {

    const [selectedSection, setSelectedSection] = useState(0);

    const sectionToDisplay = (num) => {
        setSelectedSection(num);
    };

    return (
        <div className="main-container">
            {selectedSection === 0 && (
                <main className="main">
                    <section className="circle-container">
                        <div className="photo-container">
                            <img src={photo} alt="Manon Pons-Mazars" className="photo" />
                        </div>
                        <div className="section-buttons">
                            <button onClick={() => {sectionToDisplay(1)}} className="button training">
                                <img src={formation} alt="Formation" className="button-icon" />
                            </button>
                            <button onClick={() => {sectionToDisplay(2)}} className="button skills">
                                <img src={skills} alt="Compétences" className="button-icon" />
                            </button>
                            <button onClick={() => {sectionToDisplay(3)}} className="button about-me">
                                <img src={aboutMe} alt="À propos de moi" className="button-icon" />
                            </button>
                            <button onClick={() => {sectionToDisplay(4)}} className="button hobbies">
                                <img src={hobbies} alt="Loisirs" className="button-icon" />
                            </button>
                            <button onClick={() => {sectionToDisplay(5)}} className="button experience">
                                <img src={experience} alt="Expérience" className="button-icon" />
                            </button>
                        </div>
                    </section>
                    <section className="welcome">
                        <h3>Bienvenue sur mon CV numérique</h3>
                        <p>Un peu plus complet que mon <a href="#">CV classique</a></p>
                    </section>
                </main>
            )}
            {selectedSection !== 0 && (
                <button className="close-section" onClick={() => {sectionToDisplay(0)}}>X</button>
            )}
            {selectedSection === 1 && <Training />}
            {selectedSection === 2 && <Skill />}
            {selectedSection === 3 && <AboutMe />}
            {selectedSection === 4 && <Hobby />}
            {selectedSection === 5 && <Experience />}
        </div>
    );
};

export default Main;