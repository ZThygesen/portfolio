import { styled } from 'styled-components';

export const Projects = styled.div`
    padding: 20px;

    & > div {
        max-width: var(--max-width);
        margin: auto;
    }

    & h2 {
        color: #FFF;
        margin-bottom: 32px;
    }

    & .projects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;

        & .reveal-animation {
            position: relative;
            transform: scale(0.7);
            opacity: 0;
            transition: 1s all ease;

            &.animate {
                transform: scale(1);
                opacity: 1;
            }

            &:nth-of-type(4n + 3) {
                transition-delay: 0.15s;
            }
        }
    }

    @media (min-width: 480px) {
        & .projects {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
    }

    @media (min-width: 768px) {
        padding: 40px;
    }

    @media (min-width: 1200px) {
        & .projects {
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }
    }
`;
