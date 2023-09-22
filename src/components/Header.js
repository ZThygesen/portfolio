import { useEffect, useRef, useState } from 'react';
import { Header as HeaderContainer } from '../styles/Header';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 840);
    const [menuOpen, setMenuOpen] = useState(false);

    const homeRef = useRef();
    const experienceRef = useRef();
    const projectsRef = useRef();
    const skillsRef = useRef();
    
    useEffect(() => {
        const home = {element: document.getElementById('home'), ref: homeRef};
        const experience = {element: document.getElementById('experience'), ref: experienceRef};
        const projects = {element: document.getElementById('projects'), ref: projectsRef};
        const skills = {element: document.getElementById('skills'), ref: skillsRef};
        const refs = [home, experience, projects, skills];
        
        function setActiveTab() {
            const contentHeight = window.innerHeight - 100;
            const threshold = Math.round(contentHeight * 0.7);
            refs.forEach(ref => {
                const {top, bottom} = ref.element.getBoundingClientRect();
                if (top < threshold && bottom >= threshold) {
                    ref.ref.current.classList.add('active');
                } else {
                    ref.ref.current.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', setActiveTab);
        setActiveTab();
    }, []);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 840);
        }

        window.addEventListener('resize', handleResize);
    });

    return (
        <HeaderContainer id="header">
            <div>
                <h1 className="logo">Zach Thygesen</h1>
                <div>
                    {isMobile ? <button className="material-icons toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>menu</button> : <></>}
                    <ul className={isMobile ? (menuOpen ? 'mobile open' : 'mobile') : ''}>
                        <button className="material-icons close-menu" onClick={() => setMenuOpen(false)}>arrow_forward</button>
                        <li><a href="#home" ref={homeRef}>Home</a></li>
                        <li><a href="#experience" ref={experienceRef}>Experience</a></li>
                        <li><a href="#projects" ref={projectsRef}>Projects</a></li>
                        <li><a href="#skills" ref={skillsRef}>Skills</a></li>
                    </ul>
                </div>
            </div>
        </HeaderContainer>
    );
}
