import { useEffect, useRef, useState } from 'react';
import { Project as ProjectContainer } from '../styles/Project';
import github from '../icons/github.svg';
import liveDemo from '../icons/livedemo.svg';
import { Carousel } from 'react-responsive-carousel';
import Modal from './Modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Project({ project }) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [detailsHeight, setDetailsHeight] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState({});
    
    const detailsRef = useRef();

    useEffect(() => {
        function handleResize() {
            setDetailsHeight(detailsRef.current.clientHeight);
        }
    
        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        setDetailsHeight(detailsRef.current.clientHeight);
    }, []);

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <>        
            <ProjectContainer className="reveal-animation">
                <h3 className="title">{project.title}</h3>
                {project.images ?
                    <Carousel
                        className="carousel"
                        showThumbs={false}
                        autoPlay={!modalOpen}
                        interval={5000}
                        infiniteLoop={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        swipeScrollTolerance={20}
                        showStatus={false}
                        onClickItem={(_, item) => {
                            setModalImg({src: item.props.src, alt: item.props.alt});
                            setModalOpen(true);
                        }}  
                        renderArrowPrev={(clickHandler, hasPrev) => {
                            return (
                                <button
                                    className={`material-icons prev-arrow ${hasPrev ? 'absolute' : 'hidden'}`}
                                    onClick={clickHandler}
                                >chevron_left</button>
                            )
                        }}
                        renderArrowNext={(clickHandler, hasNext) => {
                            return (
                                <button
                                    className={`material-icons next-arrow ${hasNext ? 'absolute' : 'hidden'}`}
                                    onClick={clickHandler}
                                >chevron_right</button>
                            )
                        }}
                    >
                        {project.images.map((image, index) => (
                            <img src={image.src} alt={image.alt} loading="lazy" key={index} />
                        ))}
                    </Carousel>
                    : <></>
                }
                {project.demoLink || project.codeLink ? 
                    <div className="option-links">
                        {project.demoLink ?
                            <a href={project.demoLink} target="_blank" rel="noreferrer">
                                <p>Live Demo</p>
                                <img src={liveDemo} alt="Computer Screen" />
                            </a>
                            :
                            <></>
                        }
                        {project.codeLink ?
                            <a href={project.codeLink} target="_blank" rel="noreferrer">
                                <p>View Code</p>
                                <img src={github} alt="GitHub Logo" />
                            </a>
                            :
                            <></>
                        }
                    </div>
                    : <></>
                }
                <div className="details-container">
                    <div className={`header ${detailsOpen ? 'expanded' : ''}`} onClick={() => setDetailsOpen(!detailsOpen)}>
                        <h4>Project Details</h4>
                        <button className={`material-icons toggle-details ${detailsOpen ? 'rotate' : ''}`}>expand_more</button>
                    </div>
                    <div className="details" style={{ maxHeight: detailsOpen ? detailsHeight : 0 }}>
                        <ul ref={detailsRef} className="details-list">
                            {project.descriptions.map((description, index) => (
                                <li key={index}>{description}</li>
                            ))}
                            {project.disclaimer ? 
                                <li className="disclaimer">{project.disclaimer}</li>
                                : <></>
                            }
                        </ul>
                    </div>
                </div>
            </ProjectContainer>
            <Modal
                isOpen={modalOpen}
                closeModal={closeModal}
                image={modalImg}
            />
        </>
    );
}