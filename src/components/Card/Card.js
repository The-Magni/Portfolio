import './Card.css';

const representColors = {
    Python: '#3776AB',
    Pygame: '#FFD43B',
    HTML: '#E34F26',
    CSS: '#264de4 ',
    Javascript: '#F7DF1E',
    React: '#61DAFB'
}

function Card({title, description, image, skills, className}) {
    return (
        <div className={`card`}>
            <img src={image} alt={title} />
            <div className="container">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='skills'>
                    {
                        skills.map(skill => (
                            <span key={skill} style={{color: representColors[skill], marginRight: "1em"}}>{`#${skill}`}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;