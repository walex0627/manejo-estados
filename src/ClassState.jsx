import React from 'react'

class ClassState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: false,
        }
    }
    render(){
        return (
            
        <div className='flex flex-col items-center p-8 bg-gray-200 shadow-lg rounded-xl border border-gray-300 max-w-md mx-auto mt-10'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800'>Eliminar {this.props.name}</h1>
            <p className='text-gray-600 mb-6 text-center'>Por favor, escribe el codigo de seguridad</p>
            {this.state.error && (
                <p> Error: El codigo es incorrecto</p>
            )}
            
            <input placeholder='Codigo de seguridad'
            className='w-full px-4 py-2 bg-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
            />
            <button 
            onClick={()=> this.setState({error: !this.state.error})}
            className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md'>Comprobar</button>
        </div>
        )
    }
}


export {ClassState}