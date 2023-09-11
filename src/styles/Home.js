import { styled } from 'styled-components';

export const Home = styled.div`
    min-height: calc(100vh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    padding: 20px;

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin: auto;
    }

    .about-container {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 5px 5px var(--secondary);
        margin: 0 auto;
    }

    img {
        width: 200px;
        height: auto;
        border-radius: 50%;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .about-text p {
        line-height: 1.5;
    }

    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        & a {
            width: 120px;
            text-align: center;
            text-decoration: none;
            padding: 10px 0;
            background-color: #FFF;
            border-radius: 12px;
            transition: 0.2s;

            &:hover {
                box-shadow: 3px 3px var(--secondary);
                transform: scale(1.05);
            }
        }
    }

    @media (min-width: 480px) {
        gap: 60px;
        
        .about-container {
            flex-direction: row;
        }

        .nav-links {
            flex-direction: row;
        }
    }

    @media (min-width: 768px) {
        padding: 40px;
    }
`;
