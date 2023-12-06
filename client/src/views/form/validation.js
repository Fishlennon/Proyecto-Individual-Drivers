export const validateName = (value) => {
 
    if (!value) {
      return 'Ingrese un nombre';
    }
    
  
    if (typeof value !== 'string') {
      return 'El nombre debe ser texto';
    }
  
    if (!/^[A-Z][A-Za-z .,;:'"(){}[\]_-]{2,19}$/.test(value)) {
      return 'El nombre debe comenzar con mayuscula y tener entre 3 y 20 caracteres';
    }
  
    return null;
  };
  
  export const validateLastName = (value) => {
    if (!value) {
      return 'Ingrese un apellido';
    }
  
    if (typeof value !== 'string') {
      return 'El nombre debe ser texto';
    }
  
    if (!/^[A-Z][A-Za-z0-9 .,;:'"(){}[\]_-]{2,19}$/.test(value)) {
      return 'El apellido debe comenzar con mayuscula y tener entre 3 y 20 caracteres';
    }
  
    return null;
  };
  
  
  export const validateNat = (value) => {
    if (!value) {
      return 'Ingrese una Nacionalidad';
    }
  
    if (typeof value !== 'string') {
      return 'La nacionalidad debe ser texto';
    }
  
    if (!/^[A-Z][a-z]{2,14}$/.test(value)) {
      return 'La Nacionalidad debe comenzar con mayuscula y tener entre 3 y 15 caracteres';
    }
  
    return null;
  };
  
  export const validateBirthdate = (value) => {
    if (!value) {
      return 'Ingrese fecha de nacimiento';
    }
  
    return null;
  };
  
  export const validateTeams = (value) => {
      
        const teams = value.split(',')

        for (const team of teams) {
            if (typeof team !== 'string') {
              return 'El team debe ser texto';
            }
        
            if (!/^[A-Z][\w,]*$/.test(team)) {
              return `Los teams deben comenzar con mayúscula y solo letras`;
            }
          }
        
             return null;
               
  };
  
    
  export const validateDescription = (value) => {
    if (!value) {
      return 'Ingrese descripcion';
    }
  
    if (typeof value !== 'string') {
      return 'La descripción debe ser texto';
    }
  
    if (value.length < 5 || value.length > 250) {
      return 'La descripción debe tener entre 5 y 250 caracteres';
    }
  
    return null;
  };