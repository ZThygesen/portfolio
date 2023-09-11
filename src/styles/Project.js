import styled from 'styled-components';

export const Project = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: var(--alt-bg);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px var(--secondary);

    & .title {
        margin-bottom: 16px;
    }

    & .option-links {
        align-self: center;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 40px 0 24px 0;

        & a {
            height: 52px;
            width: 176px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            text-decoration: none;
            box-shadow: 3px 3px  5px rgba(0, 0, 0, 0.2);
            background-color: #FFF;
            border-radius: 12px;
            transition: 0.2s;

            &:hover {
                box-shadow: 3px 3px var(--secondary);
                transform: scale(1.05);
            }

            & p {
                font-size: 18px;
                font-weight: 500;
            }

            & img {
                width: 36px;
                height: auto;
                fill: red;
            }
        }
    }

    & .details-container {
        & .header {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 8px;
            position: relative;
            cursor: pointer;
            transition: 0.2s;
            user-select: none;

            & .toggle-details {
                border-radius: 50%;
                background: transparent;
                cursor: pointer;
                transition: 0.5s;

                &.rotate {
                    transform: rotate(180deg);
                }
            }

            &:after {
                content: '';
                position: absolute;
                width: calc(100% - 4px);
                transform: scaleX(0);
                height: 2px;
                bottom: -1px;
                left: 0;
                background-color: var(--primary);
                opacity: 0.8;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }

            &:hover:after,
            &.expanded:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }

        & .details {
            overflow: hidden !important;
            transition: max-height 0.5s ease;
        }
    }

    & .carousel {
        display: flex;
        align-items: center;
        gap: 12px;

        & .carousel-slider {
            overflow: unset;

            & .slide {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            & .prev-arrow,
            & .next-arrow {
                font-size: 24px !important;
                background: transparent;
                border-radius: 50%;
                padding: 4px;
                cursor: pointer;
                transition: 0.1s;

                display: none;

                &:hover {
                    background-color: #FFF;
                }
            }

            & .control-dots {
            top: 100%;
            margin: 0;

                & .dot {
                    background-color: var(--primary);
                }
            }
        }
    }
`;