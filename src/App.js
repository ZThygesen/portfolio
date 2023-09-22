import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CursorEffect from './components/CursorEffect';
import './App.css';

function App() {
  const [update, setUpdate] = useState(false);

  // primary color info
  const startColorP = {r: 26, g: 34, b: 56};
  const endColorP = {r: 40, g: 53, b: 87};
  const [drP, dgP, dbP] = [endColorP.r - startColorP.r, endColorP.g - startColorP.g, endColorP.b - startColorP.b];

  // secondary color info
  const startColorS = {r: 255, g: 99, b: 51};
  const endColorS = {r: 255, g: 138, b: 102};
  const [drS, dgS, dbS] = [endColorS.r - startColorS.r, endColorS.g - startColorS.g, endColorS.b - startColorS.b];

  const startScale = 1;
  const endScale = 0;
  const [scale, setScale] = useState(startScale)

  const contentRef = useRef();
  const velocity = 0.1;

  useEffect(() => {
    function scrollEffects() {
      /*
      const pos = window.scrollY;
      contentRef.current.style.backgroundPosition = `0 ${Math.round(pos * velocity)}px`;
*/
      const bottom = contentRef.current.clientHeight - window.innerHeight + 100;
      const curr = window.scrollY;
      const scrollRatio = 1 - ((bottom - curr) / bottom);
      const ds = endScale - startScale;
      setScale(startScale + (ds * scrollRatio));

/*
      // set primary color
      const newColorP = {r: startColorP.r + (drP * scrollRatio), g: startColorP.g + (dgP * scrollRatio), b: startColorP.b + (dbP * scrollRatio)};
      const newColorHexP = rgbToHex(newColorP.r, newColorP.g, newColorP.b);
      document.documentElement.style.setProperty('--primary', `#${newColorHexP}`);

      // set secondary color
      const newColorS = {r: startColorS.r + (drS * scrollRatio), g: startColorS.g + (dgS * scrollRatio), b: startColorS.b + (dbS * scrollRatio)};
      const newColorHexS = rgbToHex(newColorS.r, newColorS.g, newColorS.b);
      document.documentElement.style.setProperty('--secondary', `#${newColorHexS}`);

      setUpdate(!update);*/
    }

    window.addEventListener('scroll', scrollEffects);
  });

  function rgbToHex(r, g, b) {
    return [r, g, b].map(x => Math.round(x)).map(x => x.toString(16).padStart(2, '0')).join('');
  }
 
  const style = {
    //backgroundColor: `${getComputedStyle(document.documentElement).getPropertyValue('--primary')}`,
    //backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='533' height='533' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%230A0D15' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23${getComputedStyle(document.documentElement).getPropertyValue('--secondary').slice(1)}'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: '#1A2238',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF8A66'/%3E%3Cstop offset='1' stop-color='%23FF6A3D'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23FF764D'/%3E%3Cstop offset='1' stop-color='%23FF6333'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='11.219999999999999'%3E%3Cpath transform='translate(${-245 * scale} 0) rotate(${-15 * scale} 1409 581) scale(0.77)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='3.74' transform='translate(${-350 * scale} ${200 * scale}) rotate(${10 * scale} 800 450) scale(0.9974999999999999)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(${20 * scale} ${-150 * scale}) rotate(${50 * scale} 401 736) scale(0.9974999999999999)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='3.4'%3E%3Cpath transform='translate(${1200 * scale} ${20 * scale}) rotate(${-5 * scale} 150 345) scale(0.9900000000000001)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='7.48' transform='translate(${-250 * scale} ${-550 * scale})' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(${-640 * scale} ${160 * scale}) scale(0.5)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }


  return (
    <>
      <Header />
      <div className="content" ref={contentRef} style={style}>
        <Home />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <CursorEffect />
    </>
  );
}

export default App;
