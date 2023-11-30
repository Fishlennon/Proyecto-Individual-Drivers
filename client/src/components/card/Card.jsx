import './Card.styles.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, lastName, nationality, birthdate, image, teams})=> {
    return(
        <div className='card-container'>
            <Link to={`/drivers/${id}`}><h2>{name} {lastName}</h2></Link>
            <h3>Nacionality: {nationality}</h3>
            <h3>{birthdate}</h3>
            <img src={image} alt={name} className='image'/>
            <p>{teams.join(", ")}</p>
        </div>
    )
}

export default Card