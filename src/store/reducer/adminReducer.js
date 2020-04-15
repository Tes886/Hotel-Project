const initialState = {

}


const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case ("ALL_FOODS"):
            return {
                ...state,
                menuItems: action.foods
               
            };

    default:
         return state;
    }
}

export default adminReducer