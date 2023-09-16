import { Modal as ModalContainer } from '../styles/Modal';

export default function Modal({isOpen, closeModal, image}) {
    return (
        <ModalContainer style={{ display: isOpen ? 'flex' : 'none' }} onClick={closeModal}>
            <button className="material-icons close-modal" onClick={closeModal}>close</button>
            <img src={image.src} alt={image.alt} />
        </ModalContainer>
    );
}