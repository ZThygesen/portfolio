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
        <HeaderContainer>
            <div className="logo">Zach Thygesen</div>
            <div>
                {isMobile ? <button className="material-icons toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>menu</button> : <></>}
                <ul className={isMobile ? (menuOpen ? 'mobile open' : 'mobile') : ''}>
                    <button className="material-icons close-menu" onClick={() => setMenuOpen(false)}>arrow_forward</button>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>
            </div>
        </HeaderContainer>
    );
}
