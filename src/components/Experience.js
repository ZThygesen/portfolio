import { Experience as ExperienceContainer } from '../styles/Experience';

const experiences = [
    {
        date: 'May 2023 - August 2023',
        title: 'Front-End Developer Intern',
        company: 'American College of Radiology',
        location: 'Reston, VA (Remote)',
        info: [
            'Collaborated with developers, UI/UX designers, business analysts, and stakeholders to develop the front end of multiple in-house applications.',
            'Built engaging user interfaces that were accessible and responsive to various screen sizes and devices.',
            'Leveraged knowledge in HTML, CSS, JavaScript, and Git while taking lead on various projects.'
        ]
    },
    {
        date: 'June 2022 - August 2022',
        title: 'Software Engineer Intern',
        company: 'Arcanyx Technical Wizardry LLC',
        location: 'San Francisco, CA (Remote)',
        info: [
            'Wrote clean, reusable, and well-tested code for a web application.',
            'Met with tech lead weekly to discuss project progress, successes, and next milestones.',
            'Gained technical experience using Rust, TypeScript, MySQL, React, MaterialUI, gRPC, Tonic, and GitLab.'
        ]
    },
    {
        date: 'September 2021 - May 2022',
        title: 'Mentor',
        company: 'Aggie STEM MentorCorps',
        location: 'College Station, TX',
        info: [
            'Managed and taught a grade school classroom of 30 students two weeks a month while fostering discussion of STEM concepts to increase student enthusiasm.',
            'Coordinated experiments using Arduino boards, basic programming, and digital fabrication tools to enhance students’ STEM confidence and performance.'
        ]
    }
]

export default function Experience() {

    return (
        <ExperienceContainer id="experience">
            <div>
                <h2>Experience</h2>
                <div className="experiences">
                    {experiences.map((experience, index) => (
                        <div className="experience-card" key={index}>
                            <div className="timeline-bullet"></div>
                            <div className="date">{experience.date}</div>
                            <h3 className="title">{experience.title}</h3>
                            <div className="company-info">
                                <div>{experience.company}</div>
                                &#8226;
                                <div>{experience.location}</div>
                            </div>
                            <ul className="info">
                                {experience.info.map((infoBullet, index) => (
                                    <li key={index}>{infoBullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="experience-card"><div className="timeline-start"></div></div>
                </div>
            </div>
        </ExperienceContainer>
    );
}
