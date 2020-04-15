const initialState = {
    
    menuAddForm: {
        title: {
            label :'title',
            elementType: 'input',
            value: '',
            elementConfig: {
                placeholder:"title"

            }
        },
        price: {
            label :'price',
            elementType: 'input',
            value: '',
            elementConfig: {
                placeholder:"price"

            }
            
        },
        ingredient: {
            label :'ingredient',
            elementType: 'input',
            value: '',
            elementConfig: {
                placeholder:" ingredient"

            }
        },
        image: {
            label :'image',
            elementType: 'image',
            value: '',
            elementConfig: {
                placeholder:" image"

            }
            
           
        },
        description: {
            label :'description',
            elementType: 'textarea',
            value: '',
            elementConfig: {
                placeholder:"description"

            }
            
        },

    },

}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOODLIST':
            const copyOfmenuAddForm = { ...state.menuAddForm }//copy login state
            const copyElement =   copyOfmenuAddForm[action.field]
            copyElement.value = action.event.target.value  // store user input in the state
            copyOfmenuAddForm[action.field]=copyElement
            return {
                ...state,
                menuAddForm: copyOfmenuAddForm
               
            };
    
            
    default:
         return state;
    }
}

export default reducer