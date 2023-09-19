import HelloWorld from './components/index'
import TodasLasTareas from './components/TodasLasTareas'
import PaletaDeColores from './components/PaletaDeColores'
import EmpleadoList from './components/EmpleadoList'
import empleados from './data/data'

function App() {


  return (
    <>
   <HelloWorld
   title="Hello my friend!"
   msg="(from changed state)!"/>
   <TodasLasTareas/>
   <PaletaDeColores/>
   <EmpleadoList empleados={empleados} />
    </>
    
  )
}

export default App
