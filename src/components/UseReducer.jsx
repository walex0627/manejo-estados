import React from 'react'



const SECURITY_CODE = 'paradigma'
function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const onConfirm = () => {
        dispatch({
            type: actionTypes.confirm
        })
    }

    const onError = () => {
        dispatch({
            type: actionTypes.error
        })
    }

    const onCheck = () => {
        dispatch({
            type: actionTypes.check
        })
    }

    const onReset = () => {
        dispatch({
            type: actionTypes.reset
        })
    }

    const onDelete = () => {
        dispatch({
            type: actionTypes.delete
        })
    }

    const onWrite = (e) => {
        dispatch({
            type: actionTypes.write,
            payload: e.target.value
        })
    }


    React.useEffect(() => {
        if (!!state.loading) {
            setTimeout(() => {

                if (state.value === SECURITY_CODE) {
                    onConfirm()
                    // setError(true)
                } else {
                    onError()
                }
            }, 3000)
        }
    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
        return (
            <div className='flex flex-col items-center p-8  bg-gray-200 shadow-lg rounded-xl border border-gray-200 max-w-md mx-auto mt-10'>
                <h1 className='text-2xl font-bold mb-4 text-gray-800'>Eliminar {name}</h1>
                <p className='text-gray-600 mb-6 text-center'>Por favor, escribe el codigo de seguridad</p>
                {(state.error && !state.loading) && (
                    <p> Error: El codigo es incorrecto</p>
                )}

                {state.loading && (
                    <p>Cargando...</p>
                )}

                <input
                    value={state.value}
                    onChange={onWrite}
                    placeholder='Codigo de seguridad'
                    className='w-full px-4 py-2 border bg-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
                <button onClick={onCheck
                    // setState({ ...state, loading: true })
                }
                    className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md'>Comprobar</button>
            </div>
        )
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <>
                <div className='flex flex-col items-center p-8 bg-gray-200 shadow-lg rounded-xl border border-gray-200 max-w-md mx-auto mt-10'>
                    <p className='text-xl font-bold mb-6 text-gray-800 text-center'>
                        ¿Estas seguro de eliminarlo?
                    </p>
                    <div className='flex gap-4 w-full'>

                        <button
                            onClick={onReset}
                            className='flex-1 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors shadow-md'> No, volver</button>
                        <button
                            onClick={onDelete}
                            className='flex-1 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-md'>Si, eliminar</button>
                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>

                <div className='flex flex-col items-center p-8 bg-gray-200 shadow-lg rounded-xl border border-gray-200 max-w-md mx-auto mt-10'>

                    <p className='text-xl font-bold mb-6 text-gray-800 text-center'>
                        Eliminado con exito
                    </p>
                    <button
                        className='flex-1 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors shadow-md'
                        onClick={onReset}
                    >Recuperar UseState</button>
                </div>
            </>
        )
    }

}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
    write: 'WRITE',
    value: 'VALUE'
}

// Reducer con elegancia, manejo de objetos y validaciones
const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    },
    [actionTypes.value]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    [actionTypes.write]: {
        ...state,
        value: payload
    },
    default: {
        ...state
    }
})


const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}


export { UseReducer }