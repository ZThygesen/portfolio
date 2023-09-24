import { useEffect, useRef } from 'react';
import animateScrollTo from 'animated-scroll-to';
import { throttle } from 'lodash';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

export function handleScroll(element) {
  animateScrollTo(document.getElementById(element), {
      cancelOnUserAction: false,
      easing: (t) => { return (--t) * t * t + 1 },
      speed: 750,
      verticalOffset: -100
  });
}

function App() {
  const starRef1 = useRef();
  const starRef2 = useRef();
  const starRef3 = useRef();
  const refs = [
    {ref: starRef1, velocity: 0.08},
    {ref: starRef2, velocity: 0.11},
    {ref: starRef3, velocity: 0.14}
  ];

  useEffect(() => {
    function scrollEffects() {
      // parallax scrolling for background star layers
      const pos = window.scrollY;
      refs.forEach(ref => {
        ref.ref.current.style.transform = `translateY(${Math.round(pos * ref.velocity)}px)`;
      });

      // initiate animation feature for each section that has a revealing animation
      const windowHeight = window.innerHeight;
      const animatedSections = document.querySelectorAll('.reveal-animation');
      animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    }

    window.addEventListener('scroll', throttle(scrollEffects, 10));
    scrollEffects();
  });

  useEffect(() => {
    const numSmallStars = 40;
    const numMediumStars = 25;
    const numLargeStars = 12;

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function generateStars() {
      refs.forEach(ref => {
        let bgImageStr = '';
        for (let i = 0; i < numSmallStars; i++) {
          bgImageStr += `radial-gradient(1px 1px at ${getRandomNumber(2, 698)}px ${getRandomNumber(2, 698)}px, #FFF, #FFFFFF00),`
        }

        for (let i = 0; i < numMediumStars; i++) {
          bgImageStr += `radial-gradient(1.5px 1.5px at ${getRandomNumber(2, 698)}px ${getRandomNumber(1, 698)}px, #FFF, #FFFFFF00),`
        }

        for (let i = 0; i < numLargeStars; i++) {
          bgImageStr += `radial-gradient(2px 2px at ${getRandomNumber(3, 697)}px ${getRandomNumber(3, 697)}px, #FFF, #FFFFFF00),`
        }

        bgImageStr = bgImageStr.slice(0, -1);
        ref.ref.current.style.backgroundImage = bgImageStr;
      });
    }

    generateStars();
  });

  return (
    <>
      <Header />
      <div className="content">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <div className="background"></div>
        <div id="stars-1" ref={starRef1}></div>
        <div id="stars-2" ref={starRef2}></div>
        <div id="stars-3" ref={starRef3}></div>
      </div>
    </>
  );
}

export default App;
