import { Experience as ExperienceContainer } from '../styles/Experience';

const experiences = [
    {
        date: 'May 2023 - August 2023',
        title: 'Front-End Developer Intern',
        company: 'American College of Radiology',
        location: 'Reston, VA (Remote)',
        info: [
            'Collaborated with developers, UI/UX designers, business analysts, and stakeholders to contribute to the front-end development of multiple in-house applications.',
            'Crafted engaging user interfaces, prioritizing accessibility and responsiveness across diverse screen sizes and devices.',
            'Took the lead on various projects, leveraging knowledge in HTML, CSS, JavaScript, and Git.'
        ]
    },
    {
        date: 'June 2022 - August 2022',
        title: 'Software Engineer Intern',
        company: 'Arcanyx Technical Wizardry LLC',
        location: 'San Francisco, CA (Remote)',
        info: [
            'Wrote clean, reusable, and thoroughly tested code for a web application, ensuring high code quality standards.',
            'Engaged with tech lead in weekly meetings to discuss project progress, highlight successes, and plan next milestones.',
            'Gained technical experience using Rust, TypeScript, MySQL, React, MaterialUI, gRPC, Tonic, and GitLab.'
        ]
    },
    {
        date: 'September 2021 - May 2022',
        title: 'Mentor',
        company: 'Aggie STEM MentorCorps',
        location: 'College Station, TX',
        info: [
            'Managed and instructed a grade school classroom of 30 students for two weeks each month, fostering discussion of STEM concepts to increase student enthusiasm.',
            'Coordinated hands-on experiments using Arduino boards, basic programming, and digital fabrication tools to enhance students\' STEM confidence and performance.'
        ]
    }
]

export default function Experience() {

    return (
        <ExperienceContainer id="experience">
            <div>
                <h2>Experience</h2>
                <div className="education reveal-animation">
                    <div className="date">August 2020 - May 2024</div>
                    <h3 className="title">Texas A&M University</h3>
                    <div className="education-info">
                        <div>BS in Computer Science</div>
                        <div className="dot-separator">&#8226;</div>
                        <div className="location">College Station, TX</div>
                    </div>
                    <ul className="info">
                        <li><span className="bold">GPA:</span> 3.9/4.0; Minor in Mathematics</li>
                        <li><span className="bold">Relevant Coursework:</span> Data Structures & Algorithms, Programming Languages, Programming Studio, Software Engineering, Human-Computer Interaction</li>
                        <li><span className="bold">Activities:</span> The Turing Games 2022, TAMUhack 2022, HowdyHack 2021, Google Developer Student Club, Aggie Coding Club</li>
                    </ul>
                </div>
                <div className="experiences">
                    {experiences.map((experience, index) => (
                        <div className="experience-card reveal-animation" key={index}>
                            <div className="timeline-bullet"></div>
                            <div className="date">{experience.date}</div>
                            <h3 className="title">{experience.title}</h3>
                            <div className="company-info">
                                <div className="company">{experience.company}</div>
                                <div className="dot-separator">&#8226;</div>
                                <div className="location">{experience.location}</div>
                            </div>
                            <ul className="info">
                                {experience.info.map((infoBullet, index) => (
                                    <li key={index}>{infoBullet}</li>
                                ))}
                            </ul>
                            {index === experiences.length - 1 ? <div className="timeline-start"></div> : <></>}
                        </div>
                    ))}
                </div>
            </div>
        </ExperienceContainer>
    );
}
