import HelloWorld from './components/index'
import TodasLasTareas from './components/TodasLasTareas'
import PaletaDeColores from './components/PaletaDeColores'
import EmpleadoList from './components/EmpleadoList'
import empleados from './data/data'
import TitleFormulario from './components/TitleFormulario'
import CitasVet from './components/veterinaria/CitasVet'

function App() {


  return (
    <>
   <HelloWorld
   title="Hello my friend!"
   msg="(from changed state)!"/>
   <TodasLasTareas/>
   <PaletaDeColores/>
   <EmpleadoList empleados={empleados} />
   <TitleFormulario/>
   <CitasVet/>
    </>
    
  )
}

export default App
