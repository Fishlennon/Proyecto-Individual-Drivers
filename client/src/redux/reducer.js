import { getDrivers } from "./actions";


const initialState = { 
    allDrivers: [],
    filtered: [],
    allTeams: []
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_DRIVERS':
      return { 
        ...state, 
        allDrivers: action.payload,
        // filtered: allDrivers
        filtered: state.filtered.length > 0 ? state.filtered : action.payload,
    };
        case 'GET_DRIVERS_BY_NAME':
             if(!action.payload){
            return window.alert('Driver no encontrado');
            }
          return { 
        ...state, 
        filtered: action.payload
    };
        case 'GET_TEAMS':
      return { 
        ...state, 
        allTeams: action.payload };
            
        case "FILTER_ORIGIN":
            if(action.payload==="ALL") return {
                ...state, 
                filtered: state.allDrivers
            }
            else if(action.payload==="API") {
            const filteredDrivers = state.allDrivers.filter((drv) =>typeof drv.id === 'number')
            return{
                ...state,
                filtered: filteredDrivers
            }}
            else if(action.payload==="DB") {
            const filteredDrivers = state.allDrivers.filter((drv) =>typeof drv.id === 'string')
            return{
                ...state,
                filtered: filteredDrivers
            }}

        case "ORDER_DRIVERS":
            let copyAllDrivers= [...state.filtered]
            if (action.payload==="NA"){
                copyAllDrivers.sort((a,b) => {
                    if(a.name>b.name) return 1;
                    else return -1;
                })
            }
        else if (action.payload==="ND"){
            copyAllDrivers.sort((a,b) => {
                if(a.name < b.name) return 1;
                else return -1;
            })
        }
        else if (action.payload==="FNA"){
            copyAllDrivers.sort((a,b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                return dateA - dateB;
            })
        }
        else if (action.payload==="FND"){
            copyAllDrivers.sort((a,b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                return dateB - dateA;
            })
        }
            return{
                ...state,
                filtered: copyAllDrivers
            }
        case "FILTER_TEAMS":
            const teamSearch = action.payload.toLowerCase();
            if(teamSearch===''){
                return{
                    ...state,
                    filtered: state.allDrivers
                }
            }
           
            const allDriversFilter = state.allDrivers.filter((driver)=>driver.teams.some(team=> team.trim().toLowerCase() === teamSearch.toLowerCase()) );
            
            if(allDriversFilter.length === 0){
                alert(`No hay teams con el nombre: ${teamSearch.toLowerCase()}`)
                return {
                    ...state,
                    filtered: state.filtered 
                };
            }  


        return{
            ...state,
            filtered: allDriversFilter
        }
        case "GET_DRIVER_BY_ID":
            const idSearch = action.payload;
            
            if(!idSearch){
                return{
                    ...state,
                    filtered: state.allDrivers
                }
            }
           
            const allIdFilter = state.allDrivers.filter((driver)=>{
                return String(driver.id) === String(idSearch).toLowerCase();
            })
            if(allIdFilter.length === 0){
                alert(`No hay drivers con el id: ${idSearch}`)
                return {
                    ...state,
                    filtered: state.filtered 
                };
            }  


        return{
            ...state,
            filtered: allIdFilter
        }
        case "POST_DRIVER":
            return {
                ...state,
                filtered: [...state.allDrivers, action.payload]
            }
        case "RESET_FILTERED":
         return {
             ...state,
            filtered: state.allDrivers
  };    
        case "DELETE_DRIVER":
            return {
              ...state,
            };
            
        default:
            return {...state}
    }
}



export default reducer