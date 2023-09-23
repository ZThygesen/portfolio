import { Modal as ModalContainer } from '../styles/Modal';

export default function Modal({isOpen, closeModal, image}) {
    // disable background scrolling when modal is open
    document.querySelector('body').style.overflow = isOpen ? 'hidden' : 'auto';

    return (
        <ModalContainer style={{ display: isOpen ? 'flex' : 'none' }} onClick={closeModal}>
            <button className="material-icons close-modal" onClick={closeModal}>close</button>
            <img src={image.src} alt={image.alt} />
        </ModalContainer>
    );
}