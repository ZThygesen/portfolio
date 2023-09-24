import { useEffect, useRef, useState } from 'react';
import { handleScroll } from '../App'
import { throttle } from 'lodash';
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

        window.addEventListener('scroll', throttle(setActiveTab, 250));
        setActiveTab();
    }, []);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 840);
        }

        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <HeaderContainer id="header">
            <div>
                <h1 className="logo" onClick={() => handleScroll('home')}>Zach Thygesen</h1>
                <div>
                    {isMobile ? <button className="material-icons toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>menu</button> : <></>}
                    <ul className={isMobile ? (menuOpen ? 'mobile open' : 'mobile') : ''}>
                        <button className="material-icons close-menu" onClick={() => setMenuOpen(false)}>arrow_forward</button>
                        <li ref={homeRef} onClick={() => handleScroll('home')}>Home</li>
                        <li ref={experienceRef} onClick={() => handleScroll('experience')}>Experience</li>
                        <li ref={projectsRef} onClick={() => handleScroll('projects')}>Projects</li>
                        <li ref={skillsRef} onClick={() => handleScroll('skills')}>Skills</li>
                    </ul>
                </div>
            </div>
        </HeaderContainer>
    );
}
