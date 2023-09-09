import React, { useEffect, useState } from 'react';
import { Header as HeaderContainer } from '../styles/Header';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 720);
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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
            </div>
        </HeaderContainer>
    );
}
