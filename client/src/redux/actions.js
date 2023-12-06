
import axios from "axios";


 export const getDrivers =  () => {
    return async (dispatch) => {
         try {
         const endpoint = `http://localhost:3001/drivers`;
         const {data}= await axios.get(endpoint)
         
         if(data.length === 0){
            throw Error('Error server');
            
         }
            return dispatch({
               type: 'GET_DRIVERS',
               payload: data,
            });
         
      }
      catch (error) {
         throw Error(error.message);
      }
      
   } 
}
 export const getDriversByName =  (name) => {
    return async (dispatch) => {
         try {
         const endpoint = `http://localhost:3001/drivers?name=${name}`;
         const {data}= await axios.get(endpoint)
      
         if(data.length === 0){
            throw Error('Driver no encontrado');
            
         }
            return dispatch({
               type: 'GET_DRIVERS_BY_NAME',
               payload: data,
            });
         
      }
      catch (error) {
          alert(`No hay Drivers con el nombre: ${name}`);
      }
      
   } 
}

 export const getDriverById =  (query) => {
   return{
      type: "GET_DRIVER_BY_ID", payload: query
  } 

};
 export const getTeams =  () => {
    return async (dispatch) => {
         try {
         const endpoint = 'http://localhost:3001/teams';
         const {data}= await axios.get(endpoint)
            return dispatch({
               type: 'GET_TEAMS',
               payload: data,
            });
         
      }
      catch (error) {
         throw Error(error.message);
      }
      
   } 

};


export const filterOrigin = (filterType) =>{
    return{
        type: "FILTER_ORIGIN", payload: filterType
    }
}

export const orderDrivers = (orden) =>{
    return{
        type: "ORDER_DRIVERS", payload: orden
    }
}
export const filterTeams = (team) =>{
    return{
        type: "FILTER_TEAMS", payload: team
    }
}

export const postDriver = (driver) => {
   return async (dispatch) =>{
      try {
         const posteo = await axios.post('http://localhost:3001/drivers',driver)

   
          dispatch({
            type: "POST_DRIVER",
             payload: posteo.data
            })
            alert(posteo.data);
      } catch (error) {
      alert('Este driver ya existe');
        throw Error(error.message);
      }
    
   };
 };
export const resetFiltered = () => {
   return {
     type: "RESET_FILTERED"
   };
 };
 export const deleteDriver = (id) =>{
   return async (dispatch) => {
      try {
         await axios.delete(`http://localhost:3001/drivers/${id}`);
         dispatch({
            type: "DELETE_DRIVER", payload: id
            
         })
         alert('Driver deleted successfully');
      } catch (error) {
         alert('Ingrese UUID')
         throw Error(error.message);
      }
   }
}