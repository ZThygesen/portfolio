import { styled } from 'styled-components';

export const Header = styled.header`
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 20px;
    background-color: var(--primary);
    border-bottom: 3px solid var(--secondary);

    .logo {
        font-size: 28px;
        font-weight: 900;
        color: var(--secondary);
        letter-spacing: 1.5px;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 28px;
    }

    .close-menu {
        display: none;
    }

    ul a {
        text-decoration: none;
        color: #FFF;
        display: block;
        font-size: 24px;
        text-align: center;
        padding: 4px 0;
        transition: 0.1s;

        &:hover {
            color: var(--secondary);
        }
    }

    .toggle-menu {
        background: transparent;
        color: #FFF;
        font-size: 36px !important;
        cursor: pointer;
        transition: 0.1s;

        &:hover {
            color: var(--secondary);
        }
    }

    ul.mobile {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-top: 60px;
        position: fixed;
        top: var(--header-height);
        bottom: 0;
        right: 0;
        background-color: var(--primary);
        transform: translateX(100%);
        transition: 0.4s;

        &.open {
            transform: translateX(0%);
        }

        & .close-menu {
            display: block;
            font-size: 26px !important;
            color: #FFF;
            position: absolute;
            top: 12px;
            left: 12px;
            background: transparent;
            padding: 4px;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.1s;

            &:hover {
                color: var(--primary);
                background-color: #FFF;
            }
        }

        & li {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        padding: 0 40px;
    }
`;
