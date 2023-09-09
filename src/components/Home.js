import { Home as HomeContainer } from '../styles/Home';
import Headshot from '../images/headshot.jpg';

export default function Home() {

    return (
        <HomeContainer id="home">
            <div className="about-container">
                <img src={Headshot} alt="Zach Thygesen Headshot" />
                <div className="about-text">
                    <h2>Hi, I'm Zach!</h2>
                    <p>
                        I am a Senior Computer Science student at Texas A&M University with a passion for web development.
                        Dedicated to creating elegant web applications with exceptional user interfaces, I am eager to leverage my strong foundation in software development to step into a career as a Front-End Developer.
                    </p>
                </div>
            </div>
            <div className="nav-links">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </div>
        </HomeContainer>
    );
}
