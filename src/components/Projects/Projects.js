import Card from "../Card/Card";
import './Projects.css';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const projects = [
    {
        image: require('../assets/pygame.png'),
        title: 'Pygame',
        description: `Creating a simple 2D fighting game 
                    in Python. Utilizing the Pygame module and OOP
                    priciples, I implemented animations, algorithm for
                    bots and basic physics 
                    such as collisions and gravity.
                    `,
        skills: ['Python', 'Pygame']
    },
    {
        image: 'Python',
        title: 'Javascript',
        description: 'Making a simple 2D website in Javascript',
        skills: ['HTML', 'CSS', 'Javascript', 'React']
    }
]

function Projects() {
    return (
        <>
            <h1>My Projects</h1>
            <div id="projects-section">
                {
                    projects.map(project => (
                        <div className="card-item" key={project.title}>
                            <Card 
                                image={project.image} 
                                title={project.title} 
                                description={project.description} 
                                skills={project.skills}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Projects;