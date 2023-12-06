import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {validateName, validateLastName, validateNat, validateBirthdate, validateDescription, validateTeams} from './validation'
import { getTeams, postDriver } from '../../redux/actions';
import './Form.styles.css';



const Form = ()=> {

    const dispatch = useDispatch()
    const [FormValid, setFormValid] = useState(false);
    // dispatch(getTeams())
    // const teams = useSelector((state)=>state.allTeams)
   

  const [input, setInput]= useState({
    name: '',
    lastName: '',
    image: '',
    nationality: '',
    birthdate: '',
    teams: '',
    description: '',
})

  const [errors, setErrors]= useState({
    name: validateName(''),
    lastName: validateLastName(''),
    // image: '',
    nationality:validateNat(''),
    birthdate: validateBirthdate(''),
    teams: validateTeams(''),
    description: validateDescription(''),
    // name: '',
    // lastName: '',
    // // image: '',
    // nationality:'',
    // birthdate:'',
    // teams: '',
    // description: '',
  })

    const handleChange = (event) => {

        setInput({
          ...input,
        //   [event.target.name]: event.target.value 

          [event.target.name]: event.target.name === 'teams' 
          ? event.target.value.split(',').map(team => team.trim()) 
          : event.target.value

      //     [event.target.name]: event.target.name === 'teams'
      // ? Array.from(event.target.selectedOptions, (option) => option.value)
      // : event.target.value
      })

        let error = ''

        switch (event.target.name) {
            case 'name': 
                error = validateName(event.target.value)
                break
            case 'lastName': 
                error = validateLastName(event.target.value)
                break
            case 'nationality': 
                error = validateNat(event.target.value)
                break
            case 'birthdate': 
                error = validateBirthdate(event.target.value)
                break
            case 'teams': 
                error = validateTeams(event.target.value)
                break
            case 'description':  
                error = validateDescription(event.target.value)
                break
            default: 
                break    
        }
        setErrors({
            ...errors,
            [event.target.name]:error
        })

        
      }
      useEffect(() =>{
        // console.log(errors)
        const isValid = Object.values(errors).every((error) => error === null);
        // console.log('FormValid:', isValid);
        setFormValid(isValid);
      },[errors])

      
        
      

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormValid:', FormValid);
        if (!FormValid) {
          alert('Error: faltan datos por rellenar');
          return;
      }

        dispatch(postDriver(input))
      }

    return(
        <div >
            <form  onSubmit={handleSubmit} className='form-container'>

                <label htmlFor="n" className='label'>Nombre:</label >
                <input className='input' type="text" id="n" name="name" placeholder="Nombre" value={input.name} onChange={handleChange} />
                <p className='error'>{errors.name}</p>

                {/* <br /> */}

                <label htmlFor="m" className='label'>Apellido:</label>
                <input className='input' type="text" id="ln" name="lastName" placeholder="Apellido" value={input.lastName} onChange={handleChange}/>
                <p className='error'>{errors.lastName}</p>

                {/* <br /> */}

                <label htmlFor="a" className='label'>Nacionalidad:</label>
                <input className='input' type="text" id="nat" name="nationality" placeholder="Nacionalidad" value={input.nationality} onChange={handleChange}/>
                <p className='error'>{errors.nationality}</p>
                

                {/* <br /> */}

                <label htmlFor="s" className='label'>Fecha nacimiento:</label>
                <input className='input' type="date" id="birth" name="birthdate" placeholder="Fecha nacimiento" value={input.birthdate} onChange={handleChange}/>
                <p className='error'>{errors.birthdate}</p>

                {/* <br /> */}

                <label htmlFor="img" className='label'>Imagen:</label>
                <input className='input' type="text" id="img" name="image" placeholder="Imagen" value={input.image} onChange={handleChange}/>
                <p className='error'>{errors.image}</p>

                {/* <br /> */}

                <label htmlFor="img" className='label'>Teams:</label>
                <input className='input' type="text" id="tms" name="teams" placeholder="Teams" value={input.teams} onChange={handleChange}/>
                <p className='error'>{errors.teams}</p>

                {/* <label htmlFor="teams" className='label'>Equipos:</label>
                <select
                  className='input'
                  id="tms"
                  name="teams"
                  multiple  // Permite seleccionar múltiples opciones
                  value={input.teams}
                  onChange={handleChange}
                >
                  {teams.map((team) => (
                    <option key={team.id} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </select> */}

                {/* <br /> */}

                <label htmlFor="img" className='label'>Descripcion:</label>
                <input className='input' type="text" id="des" name="description" placeholder="Descripcion" value={input.description} onChange={handleChange}/>
                <p className='error'>{errors.description}</p>

                {/* <br /> */}

                <button type='submit' className='button' >Crear</button>

             </form>
        </div>
    )
}

export default Form