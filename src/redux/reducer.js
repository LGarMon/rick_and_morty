const initialState = { myFavorites:[]

}
export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_FAV': return {
            ...state, myFavorites: [...state.myFavorites, action.payload]
        }
        case 'REMOVE_FAV': 
        const charactersIdValido = state.myFavorites.filter(
            charcter => charcter.id !== Number(action.payload)
        )
        return {
            ...state, myFavorites: charactersIdValido
        };
        default: return {...state}

    }
}
export default reducer