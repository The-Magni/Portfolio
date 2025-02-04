import './AboutMe.css';
import { useRef, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const langs = ['python', 'javascript', 'html', 'css', 'react', 'c', 'java'];

function AboutMe() {
    const logoRefs = useRef(null);
    useEffect(() => {
        const obsever = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        if (logoRefs.current) {
            logoRefs.current.querySelectorAll('.hidden').forEach(logo => obsever.observe(logo));
        }

        return () => obsever.disconnect();
    }, []); 

    return (
        <div id="aboutme-section">
            <div className='greeting'>
                <h1>Hello, I'm <span>Dinh</span></h1>
                <h2>A front-end developer specialized in React</h2>
            </div>
            <div className='logos' ref={logoRefs}>
                {
                    langs.map((lang) => {
                        const imgSrc = require(`../assets/${lang}.png`);
                        return (
                            <img src={imgSrc} className='hidden' key={lang} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default AboutMe;