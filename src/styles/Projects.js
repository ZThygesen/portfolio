import { styled } from 'styled-components';

export const Projects = styled.div`
    padding: 20px;

    & > div {
        max-width: 1200px;
        margin: auto;
    }

    & h2 {
        margin-bottom: 32px;
    }

    & .projects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: 480px) {
        & .projects {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
    }
`;
