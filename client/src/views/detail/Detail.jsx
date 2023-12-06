import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../detail/Detail.styles.css';

const Detail = ()=> {

    const {id} = useParams()
    
    const[driver ,setDriver] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:3001/drivers/${id}`).then(
      ({ data }) => {
        
         if (data.name) {
            setDriver(data);
         } else {
            window.alert(`No hay Driver con el id ${id}`);
         }
      }
   );
   return setDriver({});
}, [id]);

    return(
        <div className="detail-container">
         <h1 className="detail-h1">{driver?.name} {driver?.lastName}</h1>
         <p >ID: {driver?.id}</p>
         <img src={driver?.image} alt={driver?.name } className="detail-img"/>
         <h2 className="detail-h2">Nacionalidad: {driver?.nationality}</h2>
         <h2 className="detail-h2">Fecha Nacimiento: {driver?.birthdate}</h2>
         {/* <h2 >Numero: {driver?.number }</h2>
         <h2 >codigo: {driver?.code }</h2> */}
         <h2 className="detail-h2">Teams: {driver?.teams && driver?.teams.join(', ')}</h2>
         <h2 className="detail-h2">Descripcion: {driver?.description }</h2>

            
        </div>
    )
}

export default Detail