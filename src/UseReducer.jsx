const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

// Reducer con if
const reducerIf = (state, action) =>{
    if (action.type === 'ERROR'){
        return{
            ...state,
            error: true,
            loading: false
        }
    } else if (action.type === 'CHECK'){
        return{
            ...state,
            loading: true
        }
    } else {
        return{
            ... state
        }
    }
}


// Reducer con switch
const reducerSwitch = (state, action) =>{
    switch (action.type) {
    
        case 'ERROR':
            return{
                ...state,
                error: true,
                loading: false
            };
        
        case 'CHECK':
            return{
                ...state,
                loading: true
            };
        
        default:
            return{
                ... state
            };
    }
};

// Reducer con elegancia, manejo de objetos y validaciones
const reducerObject = (state) =>({
    'ERROR':{
        ...state,
        error: true,
        loading: false
    },
    'CHECK':{
        ...state,
        loading: true
    },
    default:{
        ... state
    }
    })


    const reducer = (state, action) =>{
        if (reducerObject(state)[action.type]){
            return reducerObject(state)[action.type]
        } else {
            return state
        }
    }