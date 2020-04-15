
const initialState = {
    menuItems: null,
    menuForm: { title: "", price: "", image: "" ,description:""},
    login: { email: "", password: "" },
    signUp: { username: "",  email: '',password: "", role: ""},
    isLogin: false,
    isRegister: false,
    item: null
}


const reducer = (state = initialState, action) => {

    // updating Menu Items from database;
    switch (action.type) {
        case ("ALL_FOODS"):
            return {
                ...state,
                menuItems: action.foods
               
            };
        
        
        // Updating Login State from Login Form
        case 'LOGINFORMINPUT':   
            const copyoflogin = { ...state.login }//copy login state
            copyoflogin[action.field] = action.event.target.value;  // store user input in the state
            return {
                ...state,
                login:copyoflogin
               
            };
        // Updating SignUp  State from SignUp page
        case 'SIENUPFORMINPUT':   
            const copyofsignUp = { ...state.signUp }//copy login state
            copyofsignUp[action.field] = action.event.target.value  // store user input in the state
            return {
                ...state,
                signUp:copyofsignUp
               
            };
        
        // Updating FoodForm State from FoodForm Component 
        case 'FOODITEMFORM':   
            const copyOfMenuForm = { ...state.menuForm }//copy FoodMenu state
            copyOfMenuForm[action.field] = action.event.target.value  // store user input in the state
            return {
                ...state,
                menuForm:copyOfMenuForm
               
            };
       
        
         // Updating  isLogin state from action page; 
        case 'loginSubmit':
            return { ...state, isRegister: action.success };
            
        
        // Updating isRegister state from action page; 
        case 'signUpSubmit':     
            return { ...state, isRegister: action.success };
               
    default:
         return state;
    }
}

export default reducer