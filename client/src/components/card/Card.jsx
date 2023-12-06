import './Card.styles.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, lastName, nationality, birthdate, image, teams})=> {
    return(
        <div className='card-container'>
            <Link className='link' to={`/home/${id}`}><h2 className='h2'>{name} {lastName}</h2></Link>
            <h3 className='h3'>Nacionality: {nationality}</h3>
            <h3 className='h3'>{birthdate}</h3>
            <img src={image} alt={name} className='card-image'/>
            <p className='h3'>{typeof teams === 'string' ? teams : teams.join(", ")}</p>
        </div>
    )
}

export default Card