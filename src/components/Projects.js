import Project from './Project';
import { Projects as ProjectsContainer } from '../styles/Projects';
import { projects } from '../projectsList';

export default function Projects() {
    return (
        <ProjectsContainer id="projects">
            <div>
                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project, index) => (
                        <Project project={project} key={index} />
                    ))}
                </div>
            </div>
        </ProjectsContainer>
    );
}
