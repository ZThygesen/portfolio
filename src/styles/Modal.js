import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    & .close-modal {
        position: absolute;
        top: 20px;
        right: 20px;
        background: transparent;
        font-size: 48px !important;
        cursor: pointer;
        transition: 0.1s;
        color: #FFF !important;

        &:hover {
            color: var(--secondary) !important;
        }
    }

    & img {
        width: 90%;
        max-width: 840px;
    }
`;