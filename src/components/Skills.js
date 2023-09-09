import { Skills as SkillsContainer } from '../styles/Skills';
import { skills } from '../skillsList';

export default function Skills() {
    return (
        <SkillsContainer id="skills">
            <div>
                <h2>Skills</h2>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <img src={skill.image} alt={skill.skill} />
                            <p>{skill.skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SkillsContainer>
    );
}
