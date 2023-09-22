import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorEffectContainer = styled.div`
    /* width: 700px;
    height: 700px;
    position: absolute;
    background-image: radial-gradient(transparent 0%, transparent 50%);
    border-radius: 50%; */
`;

export default function CursorEffect() {
    const cursorRef = useRef();

    useEffect(() => {
        function cursorEffect(e) {
            // cursorRef.current.style.left = `${e.pageX - 350}px`;
            // cursorRef.current.style.top = `${e.pageY - 350}px`;
        }

        function test(e) {
            // console.log(e)
        }

        window.addEventListener('mousemove', cursorEffect);
        window.addEventListener('scroll', test);
    }, []);

    return (
        <CursorEffectContainer ref={cursorRef}>

        </CursorEffectContainer>
    );
}