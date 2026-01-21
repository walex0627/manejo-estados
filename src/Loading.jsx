import React from 'react'

class Loading extends React.Component{

    componentWillUnmount(){
        console.log("componentWillUnmount");
        
    }
    render(){
        return (
            <p className='text-gray-600 mb-6 text-center'>Cargando...</p>
        )
    }
}


export { Loading }