import './Cards.styles.css';
import Card from '../card/Card'

const Cards = ({filtered})=> {
    return(
        <div className='cards-container'>
            {
                filtered.map(({id, name, lastName, nationality, birthdate, image, teams})=>{
                    return <Card
                    key={id}
                    name={name}
                    lastName={lastName}
                    nationality={nationality}
                    birthdate={birthdate}
                    image={image}
                    teams={teams}
                    />
                })
            }
            

        </div>
    )
}

export default Cards