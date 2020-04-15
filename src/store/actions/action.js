
import axios from "axios";
export const ALL_FOODS = 'ALL_FOODS';
export const FOODITEM = 'FOODITEM';
export const LOGIN = "LOGIN";
export const SIGNUP ="SIGNUP"

export const initFood= (foods) => {
    return {
    type: ALL_FOODS,
    foods: foods
    }
}
   
   export const fetchFoodAsync = () => {
    return dispatch => {
    axios.get(`http://localhost:5000/products`)
        .then(response => {
        console.log(response.data)
       dispatch(initFood(response.data));
    });
    }
}


export const userLogin = () => { 

    return (dispatch, getState) => {
            
        const userLogin = getState().reducer.login
        console.log(getState().reducer.login)
            
            axios({
                method: 'post',
                url: 'http://localhost:5000/users/add',
                data: {
                  email:userLogin.email,
                  password: userLogin.password
                }
            }).then(res => { 
                if (res ===true) { 
                    dispatch({ type: 'loginsubmit',success:true });
                }
                else {
                    dispatch({ type: 'loginsubmit',success:false });
                }
            })
           
        }
    

}

export const userSignUpRegis= () => { 

    return (dispatch, getState) => {
            
        const userSignUp = getState().reducer.signUp
        console.log(getState().reducer.signUp)
            
            axios({
                method: 'post',
                url: 'http://localhost:5000/users/add',
                data: {
                    username:userSignUp.username,
                    email: userSignUp.email,
                    password: userSignUp.password,
                    role: userSignUp.role
                }
            }).then(res => { 
                if (res === true) { 
                    dispatch({ type: 'signUpSubmit',success:true });
                }


                else {
                    dispatch({ type: 'signUpSubmit',success:false });
                }
            })
           
        }
    

}



export const foodItemFetching= () => { 

    
    return (dispatch, getState) => {
            
        const FoodItemForm = getState().reducer.menuForm;
         console.log(getState().reducer.menuForm)
     
       
            axios({
                method: 'post',
                url: 'http://localhost:5000/products/add',
                data: {
                    title:FoodItemForm.title,
                    price:FoodItemForm.price,
                    image: FoodItemForm.image, 
                    description: FoodItemForm.description
                
                }
            })
           
        }
    

}
export const foodItemFetchingUmer= () => { 

    
    return (dispatch, getState) => {
            
        const FoodItemForm = getState().umerReducer.menuAddForm;
         console.log(getState().umerReducer.menuAddForm)
     
       
            axios({
                method: 'post',
                url: 'http://localhost:5000/products/add',
                data: {
                    title:FoodItemForm.title,
                    price:FoodItemForm.price,
                    image: FoodItemForm.image, 
                    description: FoodItemForm.description
                }
            })
           
        }
    

}








