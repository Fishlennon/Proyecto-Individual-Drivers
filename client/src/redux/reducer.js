import { addFav, removeFav } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        // case "ADD_FAV":
        //     return{
        //         ...state,
        //         allCharacters: [...state.allCharacters, action.payload],
        //        myFavorites: [...state.allCharacters, action.payload]
        //     }
        case 'ADD_FAV':
      return { ...state, 
        myFavorites: action.payload, 
        allCharacters: action.payload };
        // case "REMOVE_FAV": 
        // const filteredFavs= state.allCharacters.filter((fav) => fav.id !== Number(action.payload))
        //     return{
        //         ...state,
        //         myFavorites: filteredFavs,
        //         allCharacters: filteredFavs
                
        //     }
        case 'REMOVE_FAV':
      return { ...state, 
        myFavorites: action.payload,
        allCharacters: action.payload };
        
        case "FILTER":
            // let orderCopy = [...state.allCharacters]
            if(action.payload==="ALL") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredCharacters = state.allCharacters.filter((char) => char.gender === action.payload)
            return{
                ...state,
                myFavorites: filteredCharacters
            }
        case "ORDER":
            let copyMyFav= [...state.myFavorites]
            if (action.payload==="A"){
                copyMyFav.sort((a,b) => {
                    if(a.name>b.name) return 1;
                    else return -1;
                })
            }
        else if (action.payload==="D"){
            copyMyFav.sort((a,b) => {
                if(a.name < b.name) return 1;
                else return -1;
            })
        }
            return{
                ...state,
                myFavorites: copyMyFav
            }
    
        default:
            return {...state}
    }
}



export default reducer