import {  useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteDriver} from '../../redux/actions';
import './Delete.styles.css';

const Delete = () => {
    
    const dispatch = useDispatch()
    const [input, setInput]= useState('') 

    const handleChange = (event) => {

        setInput(  event.target.value )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteDriver(input))
      }

    return(
        <div className='delete-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="img" className='label'>UUID:</label>
            <input className='input' type="text" id="del" name="delete" placeholder="Ingrese UuId" value={input} onChange={handleChange}/>
            
            <button type='submit' className='button' >Eliminar</button>
         </form>
        </div>
    )
}

export default Delete