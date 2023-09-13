import { styled } from 'styled-components';

export const Experience = styled.div`
    background-color: var(--alt-bg);
    padding: 20px;

    & > div {
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    h2 {
        margin-bottom: -12px;
    }

    .experience-card {
        display: flex;
        flex-direction: column;
        padding: 0 0 32px 24px;
        border-left: 4px solid var(--primary);
        position: relative;

        &:last-of-type {
            border-color: transparent;
            padding-bottom: 8px;
        }

        &:nth-last-of-type(2) {
            padding-bottom: 12px;
        }
    }

    .timeline-bullet {
        width: 16px;
        height: 16px;
        background-color: var(--secondary);
        border-radius: 50%;
        position: absolute;
        right: calc(100% - 6px);
    }

    .timeline-start {
        width: 20px;
        height: 4px;
        background-color: var(--primary);
        position: absolute;
        right: calc(100% - 8px);
    }

    .date {
        font-size: 14px;
        font-weight: 700;
        color: var(--secondary);
        margin-bottom: 4px;
    }

    .title {
        margin-bottom: 8px;
    }

    .education-info,
    .company-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 12px;

        & * {
            font-weight: 700;
        }

        & .location {
            font-style: italic;
        }

        & .dot-separator {
            display: none;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: outside;
        padding-left: 18px;

        & li {
            line-height: 1.5;
        }

        & .bold {
            font-weight: 700;
        }
    }

    @media (min-width: 480px) {
        .education-info,
        .company-info {
            flex-direction: row;

            & .dot-separator {
                display: block !important;
            }
        }
    }
`;
