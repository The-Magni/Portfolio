import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from "react";
import './Header.css';

const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    } else {
        console.log('Not found');
    }
};

function Header() {
    const headerRef = useRef(null);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement)
                return;
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)"
            }
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const socials = [
        {
            icon: faEnvelope,
            url: "https://mail.google.com/mail/?view=cm&to=dinhquanganh1606@gmail.com",
          },
          {
            icon: faGithub,
            url: "https://github.com/The-Magni",
          },
          {
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/quang-anh-dinh-00205033a/",
          },
    ];

    const styles = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transform: "translateY(0)",
        transition: "transform 0.3s ease-in-out",
    }

    return (
        <div className="header">
            <nav ref={headerRef} style={styles}>
                <div className="nav-left">
                    <a href={socials[0].url} className="social">
                        <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                    </a>
                    <a href={socials[1].url} className="social">
                        <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                    </a>
                    <a href={socials[2].url} className="social">
                        <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                    </a>
                </div>
                <div className="nav-right">
                    <a href="#aboutme" className="nav-item" onClick={handleClick('aboutme')}>About me</a>
                    <a href="#projects" className="nav-item" onClick={handleClick('projects')}>Projects</a>
                    <a href="#work" className="nav-item" onClick={handleClick('work')}>Work Experience</a>
                    <a href="#contactme" className="nav-item" onClick={handleClick('contactme')}>Contact me</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;