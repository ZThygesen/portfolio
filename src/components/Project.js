import { useEffect, useRef, useState } from 'react';
import { Project as ProjectContainer } from '../styles/Project';
import github from '../icons/github.svg';
import liveDemo from '../icons/livedemo.svg';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Project({ project }) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [detailsHeight, setDetailsHeight] = useState(0);
    
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

    console.log(detailsHeight);

    return (
        <ProjectContainer>
            <h3 className="title">{project.title}</h3>
            <Carousel
                className="carousel"
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showStatus={false}
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
                    <img src={image.src} alt={image.alt} key={index} />
                ))}
            </Carousel>
            <div className="option-links">
                {project.codeLink ?
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                        <p>Live Demo</p>
                        <img src={liveDemo} alt="Computer Screen" />
                    </a>
                    :
                    <></>
                }
                {project.demoLink ?
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                        <p>View Code</p>
                        <img src={github} alt="GitHub Logo" />
                    </a>
                    :
                    <></>
                }
            </div>
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
                    </ul>
                </div>
            </div>
        </ProjectContainer>
    );
}