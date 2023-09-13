import { Home as HomeContainer } from '../styles/Home';
import Headshot from '../images/headshot.jpg';
import email from '../icons/email.svg';
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';
import phone from '../icons/phone.svg';
import resumeIcon from '../icons/resume.svg';
import resume from '../Zach_Thygesen_Resume.pdf';

export default function Home() {

    return (
        <HomeContainer id="home">
            <div>
                <div className="welcome-section">
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
                    <div className="personal-info">
                        <div className="phone-number">
                            <img src={phone} alt="Phone Icon" />
                            <p>(830) 660-7224</p>
                        </div>
                        <a href="mailto:zsthygesen@gmail.com" target="_blank" rel="noreferrer">
                            <img src={email} alt="Email Me" />
                            <p>zsthygesen@gmail.com</p>
                        </a>
                        <a href="https://www.linkedin.com/in/zach-thygesen/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Profile" /></a>
                        <a href="https://github.com/ZThygesen" target="_blank" rel="noreferrer"><img src={github} alt="GitHub Account" /></a>
                        <a href={resume} target="_blank" rel="noreferrer">
                           <img src={resumeIcon} alt="Resume Icon" />
                            <p>Resume</p>
                        </a>
                    </div>
                </div>
                <div className="nav-links">
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>
            </div>
        </HomeContainer>
    );
}
