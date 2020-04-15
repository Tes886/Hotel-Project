import axios from "axios";
export const ALL_FOODS = 'ALL_FOODS';
export const REMOVE_FOOD = 'REMOVE_FOOD';



export const allFood= (foods) => {
    return {
    type: ALL_FOODS,
    foods: foods
    }
}
   
   export const fetchFoodItems = () => {
    return dispatch => {
    axios.get(`http://localhost:5000/products`)
        .then(response => {
        console.log(response.data)
     dispatch(allFood(response.data));
    });
    }
}


export const deleteFood= (request) => {
    return {
    type: REMOVE_FOOD ,
    foods:  request
    }
}
export const DeleteItems = (id) => {
   console.log(id)
    return dispatch => {
        const request = axios.delete(`http://localhost:5000/products/${id}`)
        .then(response => { 
       dispatch(deleteFood(request));
    });
    }
}
// export const EditItems = (id) => {
//        console.log(id)
//     return dispatch => {
//     axios.Update(``)
//         .then(response => {
//         console.log(response.data)
//        dispatch(allFood(response.data.hits));
//     });
//     }
// }