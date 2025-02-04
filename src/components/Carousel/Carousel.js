import { useState } from "react";
import Card from "../Card/Card";
import "./Carousel.css";

const cards = [
    {
        image: 'Python',
        title: 'Pygame',
        description: 'Making a simple 2D game in Python'
    },
    {
        image: 'Python',
        title: 'Javascript',
        description: 'Making a simple 2D website in Javascript'
    }
];

function Carousel() {
    const [position, setPosition] = useState(0);

    const handleMoveToNextSlide = () => {
        if (position === cards.length - 1) {
            setPosition(0);
        } else {
            setPosition(position + 1);
        }
    };

    const handleMoveToPrevSlide = () => {
        if (position === 0) {
            setPosition(cards.length - 1);
        } else {
            setPosition(position - 1);
        }
    }

    const handleDotClick = index => {
        setPosition(index);
    }

    return (
        <div className="carousel">
            {
                cards.map((card, index) => (
                    <div 
                        key={index}
                        className={`carousel-item ${index === position ? "carousel-item-visible" : "carousel-item-hidden"}`}
                    >
                        <Card image={card.image} title={card.title} description={card.description} />
                    </div>
                ))
            }
            <div className="carousel-actions">
                <button id="carousel-button-prev" onClick={handleMoveToPrevSlide}>{'<'}</button>
                <button id="carousel-button-next" onClick={handleMoveToNextSlide}>{'>'}</button>
            </div>
            <div className="carousel-dots">
                {
                    cards.map((_, index) => (
                        <input 
                            type="radio" 
                            className={`dot ${index === position ? 'selected-dot' : ''}`}
                            name="dot"
                            checked={index === position}
                            onClick={() => handleDotClick(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel;