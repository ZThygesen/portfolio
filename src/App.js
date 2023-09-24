import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 481);
  const isMobileRef = useRef(window.innerWidth < 481);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 481);
      isMobileRef.current = window.innerWidth < 481;
    }

    window.addEventListener('resize', handleResize);
  }, []);

  const starRef1 = useRef();
  const starRef2 = useRef();
  const starRef3 = useRef();
  const refs = useMemo(() => [
    {ref: starRef1, velocity: 0.08},
    {ref: starRef2, velocity: 0.11},
    {ref: starRef3, velocity: 0.14}
  ], []);

  const scrollEffects = useCallback(() => {
    if (!isMobileRef.current) {
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
  }, [refs]);
  
  useEffect(() => {
    const throttleSpeed = isMobileRef.current ? 1000 : 10;
    window.addEventListener('scroll', throttle(scrollEffects, throttleSpeed));
    scrollEffects();
  }, [isMobile, refs, scrollEffects]);

  useEffect(() => {
    let starArea = 700;
    let numSmallStars = 40;
    let numMediumStars = 25;
    let numLargeStars = 12;

    if (isMobileRef.current) {
      starArea = 200;
      numSmallStars = 4;
      numMediumStars = 2;
      numLargeStars = 1;
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function generateStars() {
      refs.forEach(ref => {
        let bgImageStr = '';
        for (let i = 0; i < numSmallStars; i++) {
          bgImageStr += `radial-gradient(1px 1px at ${getRandomNumber(2, starArea - 2)}px ${getRandomNumber(2, starArea - 2)}px, #FFF, #FFFFFF00),`
        }

        for (let i = 0; i < numMediumStars; i++) {
          bgImageStr += `radial-gradient(1.5px 1.5px at ${getRandomNumber(2, starArea - 2)}px ${getRandomNumber(1, starArea - 2)}px, #FFF, #FFFFFF00),`
        }

        for (let i = 0; i < numLargeStars; i++) {
          bgImageStr += `radial-gradient(2px 2px at ${getRandomNumber(3, starArea - 3)}px ${getRandomNumber(3, starArea - 3)}px, #FFF, #FFFFFF00),`
        }

        bgImageStr = bgImageStr.slice(0, -1);
        ref.ref.current.style.backgroundImage = bgImageStr;
      });
    }

    generateStars();
  }, [isMobile, refs]);

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
