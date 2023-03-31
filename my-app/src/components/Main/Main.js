import { useState } from 'react';

import './Main.scss';

// Components
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Hobby from '../Hobby/Hobby';
import Skill from '../Skill/Skill';
import Training from '../Training/Training';

// Images
import photo from '../../assets/images/avatar.jpg';
import formation from '../../assets/images/training.png';
import skills from '../../assets/images/skills.png';
import aboutMe from '../../assets/images/about-me.png';
import hobbies from '../../assets/images/hobbies.png';
import experience from '../../assets/images/portfolio.png';
// Dark mode images
import formationDark from '../../assets/images/training_dark-mode.png';
import skillsDark from '../../assets/images/skills_dark-mode.png';
import aboutMeDark from '../../assets/images/about-me_dark-mode.png';
import hobbiesDark from '../../assets/images/hobbies_dark-mode.png';
import experienceDark from '../../assets/images/portfolio_dark-mode.png';


function Main({ darkMode }) {
    const darkModeToChildren = darkMode;
    const [selectedSection, setSelectedSection] = useState(0);

    const sectionToDisplay = (num) => {
        setSelectedSection(num);
    };

    return (
        <div className="main-container">
            {selectedSection === 0 && (
                <main>
                    <div className="main-titles">
                        <h1>Manon Pons-Mazars</h1>
                        <h2>Développeuse Web</h2>
                    </div>
                    <section className="circle-container">
                        <div className="photo-container">
                            <img src={photo} alt="Manon Pons-Mazars" className="photo" />
                        </div>
                        <button onClick={() => {sectionToDisplay(1)}} className="button training" id="training">
                            <img src={darkMode ? formationDark : formation} alt="Formation" className="button-icon"  />
                            <p className="button-text">Formation</p>
                        </button>
                        <button onClick={() => {sectionToDisplay(2)}} className="button skills" id="skills">
                            <img src={darkMode ? skillsDark : skills} alt="Compétences" className="button-icon" />
                            <p className="button-text">Compétences</p>
                        </button>
                        <button onClick={() => {sectionToDisplay(3)}} className="button about-me" id="about-me">
                            <img src={darkMode ? aboutMeDark : aboutMe} alt="À propos de moi" className="button-icon" />
                            <p className="button-text">Infos</p>
                        </button>
                        <button onClick={() => {sectionToDisplay(4)}} className="button hobbies" id="hobbies">
                            <img src={darkMode ? hobbiesDark : hobbies} alt="Loisirs" className="button-icon" />
                            <p className="button-text">Loisirs</p>
                        </button>
                        <button onClick={() => {sectionToDisplay(5)}} className="button experience" id="experience">
                            <img src={darkMode ? experienceDark : experience} alt="Expérience" className="button-icon" />
                            <p className="button-text">Expérience</p>
                        </button>
                    </section>
                    <section className="welcome">
                        <h3 className={darkMode ? "welcome-title welcome-title-dark" : "welcome-title"}>Bienvenue sur mon CV numérique</h3>
                        <p>Un peu plus complet que mon <a href="#">CV classique</a></p>
                    </section>
                </main>
            )}
            {selectedSection !== 0 && (
                <button className="close-section" onClick={() => {sectionToDisplay(0)}}>X</button>
            )}
            {/*Room for improvement : Centralize darkMode ? */}
            {selectedSection === 1 && <Training />}
            {selectedSection === 2 && <Skill />}
            {selectedSection === 3 && <AboutMe darkMode={darkModeToChildren} />}
            {selectedSection === 4 && <Hobby darkMode={darkModeToChildren} />}
            {selectedSection === 5 && <Experience darkMode={darkModeToChildren} />}
        </div>
    );
};

export default Main;