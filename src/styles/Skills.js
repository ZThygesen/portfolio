import { styled } from 'styled-components';

export const Skills = styled.div`

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translateY(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translateY(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translateY(0px);
        }
    }

    .skill {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 5px #20232c solid;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        /* transform: translateY(0px); */
        animation: float 6s ease-in-out infinite;
        transition: 0.2s !important;

        &:hover {
            animation-play-state: paused;
            transform: scale(1.05) !important;
        }
    }
`;
