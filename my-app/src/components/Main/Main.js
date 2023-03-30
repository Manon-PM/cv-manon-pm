import './Main.scss';

import photo from '../../assets/images/avatar.jpg';
import formation from '../../assets/images/training.png';
import skills from '../../assets/images/skills.png';
import aboutMe from '../../assets/images/about-me.png';
import hobbies from '../../assets/images/hobbies.png';
import experience from '../../assets/images/portfolio.png';

function Main() {
    return (
        <main className="main">
            <section className="circle-container">
                <div className="photo-container">
                    <img src={photo} alt="Manon Pons-Mazars" className="photo" />
                </div>

                <div className="section-buttons">
                    <button className="button training">
                        <img src={formation} alt="Formation" className="button-icon" />
                    </button>
                    <button className="button skills">
                        <img src={skills} alt="Compétences" className="button-icon" />
                    </button>
                    <button className="button about-me">
                        <img src={aboutMe} alt="À propos de moi" className="button-icon" />
                    </button>
                    <button className="button hobbies">
                        <img src={hobbies} alt="Loisirs" className="button-icon" />
                    </button>
                    <button className="button experience">
                        <img src={experience} alt="Expérience" className="button-icon" />
                    </button>
                </div>
            </section>
            <section className="welcome">
                <h3>Bienvenue sur mon CV numérique</h3>
                <p>Un peu plus complet que mon <a href="#">CV classique</a></p>
            </section>
        </main>
    );
};

export default Main;