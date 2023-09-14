import HelloWorld from './components/index'
import TodasLasTareas from './components/TodasLasTareas'
import PaletaDeColores from './components/PaletaDeColores'

function App() {

  return (
    <>
   <HelloWorld
   title="Hello my friend!"
   msg="(from changed state)!"/>
   <TodasLasTareas/>
   <PaletaDeColores/>
    </>
    
  )
}

export default App
