import { styled } from 'styled-components';

export const Skills = styled.div`
    padding: 20px;
    margin-bottom: 32px;

    & > div {
        max-width: var(--max-width);
        margin: auto;
    }

    h2 {
        color: #FFF;
        margin-bottom: 32px;
        text-align: center;
    }

    .skills {
        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 28px;
        flex-wrap: wrap;
    }

    .skill {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-align: center;
        padding: 12px 16px;
        border-radius: 16px;
        background-color: var(--transparent-bg);
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.9);
        animation: float 4s ease-in-out infinite;
        transform: translateY(0px);
        transition: 0.1s;
        cursor: default;
        animation-delay: 1.5s;

        &:nth-of-type(2n + 1) {
            animation-delay: 2.5s;
        }

        &:nth-of-type(3n + 2) {
            animation-delay: 3.5s;
        }

        &:nth-of-type(4n + 3) {
            animation-delay: 4.5s;
        }
    }

    .skill img {
        width: 50px;
        height: auto;
    }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.9);
            transform: translateY(0px);
        }

        50% {
            box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translateY(-4px);
        }

        100% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.9);
            transform: translateY(0px);
        }
    }

    @media (min-width: 481px) {
        .reveal-animation {
            position: relative;
            opacity: 0;
            transition: 1s all ease;

            &.animate {
                opacity: 1;
            }
        }
    }

    @media (min-width: 769px) {
        padding: 40px;
    }
`;
