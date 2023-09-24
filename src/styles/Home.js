import { styled } from 'styled-components';
// import bg from '../images/bg.jpg';

export const Home = styled.div`
    min-height: calc(100vh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .reveal-animation {
        position: relative;
        transform: translateY(-150px);
        opacity: 0;
        transition: 2s all ease;

        &.animate {
            transform: translateY(0);
            opacity: 1;
        }
    }

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

    .welcome-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: var(--transparent-bg);
        border-radius: 20px;
        padding: 20px;
        box-shadow: 5px 5px var(--secondary);
        margin: 0 auto;
    }

    .about-container {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        & img {
            width: 200px;
            height: auto;
            border-radius: 50%;
        }
    }

    .about-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }

    .about-text p {
        line-height: 1.5;
    }

    .personal-info {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;

        & a,
        .phone-number {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            position: relative;
            padding: 12px;
            border-radius: 12px;
            transition: 0.2s;

            & p {
                font-size: 18px;
                font-weight: 500;
            }

            &:not(.phone-number):hover {
                box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
            }
        }

        img {
            width: 32px;
            height: auto;
        }
    }

    .nav-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        & button {
            width: 120px;
            text-align: center;
            padding: 10px 0;
            background-color: var(--transparent-bg);
            border-radius: 12px;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                box-shadow: 3px 3px var(--secondary);
                transform: scale(1.05);
            }
        }
    }

    @media (min-width: 480px) {
        gap: 60px;

        .nav-links {
            flex-direction: row;
        }
    }

    @media (min-width: 700px) {
        .about-container {
            flex-direction: row;
        }

        .about-text {
            text-align: left;
        }
    }

    @media (min-width: 768px) {
        padding: 40px;
    }
`;
