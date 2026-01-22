import { UseState } from './components/UseState.jsx'
import { ClassState } from './components/ClassState.jsx'
import { UseReducer } from './components/UseReducer.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
      <UseReducer name="UseReducer"/>
    </>
  )
}

export default App
