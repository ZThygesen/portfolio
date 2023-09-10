import { Projects as ProjectsContainer } from '../styles/Projects';
import { projects } from '../projectsList';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects() {
    return (
        <ProjectsContainer id="projects">
            <div>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div className="project" key={index}>
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
                    </div>
                ))}
            </div>
        </ProjectsContainer>
    );
}
