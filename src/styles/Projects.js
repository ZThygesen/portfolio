import { styled } from 'styled-components';

export const Projects = styled.div`
    padding: 20px;

    & > div {
        max-width: 1200px;
        margin: auto;
    }

    .project {
        display: flex;
        flex-direction: column;

        background-color: var(--alt-bg);
        padding: 20px;
        border-radius: 20px;
        box-shadow: 5px 5px var(--secondary);

        & .carousel {
            max-width: 600px;
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
    }
`;
