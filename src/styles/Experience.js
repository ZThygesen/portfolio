import { styled } from 'styled-components';

export const Experience = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--alt-bg);
    padding: 20px;

    h2 {
        font-weight: 900;
        font-size: 32px;
        margin-bottom: 32px;
    }

    .experience-card {
        display: flex;
        flex-direction: column;
        padding: 0 0 32px 24px;
        border-left: 4px solid var(--primary);
        position: relative;

        &:last-of-type {
            padding-bottom: 12px;
        }

        & .timeline-bullet {
            width: 16px;
            height: 16px;
            background-color: var(--primary);
            border-radius: 50%;
            position: absolute;
            right: calc(100% - 6px);
        }

        & .date {
            font-size: 14px;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 4px;
        }

        & .title {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 8px;
        }

        & .company-info {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;

            & * {
                font-weight: 700;
            }
        }

        & .info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            list-style-type: none;
        }
    }

    /* @media (min-width: 768px) {
        .experience-card {
            width: 50%;

            &:nth-of-type(odd) {
                padding: 0 24px 32px 0;
                border: none;
                border-right: 4px solid var(--primary);
                text-align: right;

                & .timeline-bullet {
                    left: calc(100% - 6px);
                }
            }

            &:nth-of-type(even) {
                margin-left: 50%;
            }

        }
    } */
`;
