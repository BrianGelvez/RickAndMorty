

const initialState = {
    myFavorites: [],
    allCharactersFav: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, stateallCharactersFav: action.payload };          
            case 'REMOVE_FAV':
                return { ...state, myFavorites: action.payload };
        case "FILTER":
            const AllcaractersFiltered = state.allCharactersFav.filter((characters) => characters.gender === action.payload);
            return {
                ...state,
                myFavorites: AllcaractersFiltered
            };
        case "ORDER":
            const allCharactersFavCopy = [...state.allCharactersFav];
            return {
                ...state,
                myFavorites: 
                action.payload === "A" 
                ? allCharactersFavCopy.sort(( a, b ) => a.id - b.id)
                : allCharactersFavCopy.sort(( a, b ) => b.id - a.id)
            }



        default:
            return { ...state }
    };
};


export default reducer;