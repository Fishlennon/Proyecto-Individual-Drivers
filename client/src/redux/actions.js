
import axios from "axios";


 export const getDrivers =  (name) => {
    return async (dispatch) => {
         try {
         const endpoint = `http://localhost:3001/drivers${name ? `?name=${name}` : ''}`;
         const {data}= await axios.get(endpoint)
         
         if(data.length === 0){
            throw Error('Driver no encontrado');
            
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

 export const getDriverById =  (query) => {
   return{
      type: "GET_DRIVER_BY_ID", payload: query
  } 

};
 export const getTeams =  (name) => {
    return async (dispatch) => {
         try {
         const endpoint = `http://localhost:3001/teams${name ? `?name=${name}` : ''}`;
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

//  export const removeFav = (id) => {
//     return async (dispatch) => {
//        try {
//          const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//          const {data} = await axios.delete(endpoint)
//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//       });
         
//       } catch (error) {
//          throw Error(error.message);
//       }
//    };
// };
