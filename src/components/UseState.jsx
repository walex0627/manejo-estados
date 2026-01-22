import React from 'react'



const SECURITY_CODE = 'paradigma'
function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    })

    console.log(state)
    React.useEffect(() => {
        if (!!state.loading) {
            setTimeout(() => {

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true
                    })
                    // setError(true)
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false
                    })
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
                    onChange={(e) => { setState({ ...state, value: e.target.value }) }}

                    placeholder='Codigo de seguridad'
                    className='w-full px-4 py-2 border bg-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
                <button onClick={() => {
                    setState({ ...state, error: false })
                    setState({ ...state, loading: true })
                }} className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md'>Comprobar</button>
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
                        onClick={()=>{
                            setState({...state, confirmed: false, value: ''})
                        }}
                        className='flex-1 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors shadow-md'> No, volver</button>
                        <button
                        onClick= {()=>{
                            setState({...state, deleted:true})
                        }} 
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
                onClick={()=>{
                    setState({...state, confirmed: false, deleted: false, value: ''})
                }}
                >Recuperar UseState</button>
                </div>
            </>
        )
    }

}


export { UseState }