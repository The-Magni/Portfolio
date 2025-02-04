import { useEffect, useRef } from 'react';
import './Work.css';

const works = [
    {
        title: 'Cambride A-level',
        date: '8/2022 - 11/2023',
        description: `
                        I studied 4 subjects: Mathematics, Further Mathematics,
                        Physics and Chemistry. At the exam, I scored A* at all
                        4 subjects.
                    `,
        logo: require('../assets/a-level.png')
    },
    {
        title: 'Teaching Assistant',
        date: '1/2024 - 7/2024',
        description: `
                        I worked part-time as a teaching assistant in Physics, helping about
                        30 students in their A-level exam. My duties are creating assignments
                        using LaTeX, marking, correcting their exercise and sharing my experience
                        about studying Physics.
                     `,
        logo: require('../assets/hexagon.jpg')
    },
    {
        title: 'Computer Science Undergraduates at NTU',
        date: '8/2024 - current',
        description: `
                        I started to study Computer Science at NTU and awarded the ASEAN Undergraduates Scholarship
                        since 2024.
                     `,
        logo: require('../assets/ntu.png')
    },
    {
        title: 'Front-end developer',
        date: '11/2024 - current',
        description: `
                        I worked in a team of 10 people in Student's Computing and Data Science
                        club. Our goal is to develop a website advertising about our college and
                        club, and also posting internship opportunities, serving thousands of students
                        in our college. 
                     `,
        logo: require('../assets/scds.png')
    }
];

function Work() {
    const timelineRef = useRef(null);

    useEffect(() => {
        /**  const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const timelineElement = timelineRef.current;
            if (prevScrollPos < currentScrollPos) {
                timelineElement.querySelectorAll('.box').forEach(box => {
                    box.style.animation = 'movedown 1s linear forwards';
                });
                timelineElement.style.setProperty('--after-animation', 'moveline 6s linear forwards');
            } else {
                timelineElement.querySelectorAll('.box').forEach(box => {
                    box.style.animation = '';
                });
                timelineElement.style.setProperty('--after-animation', '');
            }
            prevScrollPos = currentScrollPos;
        } */
        let scrollPos = window.scrollY;
        const timelineElement = timelineRef.current;
        if (!timelineElement) {
            console.log("Null");
            return;
        } else {
            console.log("Not null");
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(entry.target);
                if (entry.isIntersecting) {
                    if (entry.target.className === 'box left')
                        entry.target.style.animation = 'moveleft 1s linear forwards';
                    else if (entry.target.className === 'box right')
                        entry.target.style.animation = 'moveright 1s linear forwards';
                    else if (entry.target.className === 'timeline') {
                        document.documentElement.style.setProperty('--ani', "moveline 6s linear forwards");
                    }
                }
            });
        });

        timelineElement.querySelectorAll('.box').forEach(box => observer.observe(box));
        observer.observe(timelineElement);

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <div id="work-section">
            <h1>My Work Experience and Education</h1>
            <div className="timeline" ref={timelineRef}>
                {
                    works.map((work, index) => {
                        let cls;
                        if (index % 2 === 0) {
                            cls = 'left';
                        } else {
                            cls = 'right';
                        }

                        return (
                            <div className={`box ${cls}`} key={work.title}>
                                <img src={work.logo} />
                                <div className='content'>
                                    <h2>{work.title}</h2>
                                    <small>{work.date}</small>
                                    <p>{work.description}</p>
                                    <span className={`${cls}-box-arrow`}></span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Work;