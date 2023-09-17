import Formulario  from "./Components/Formulario"
import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import Section from "./Components/Section"





function App() {



 


  return (
    
    <div className=" p-4 pt-9 w-screen font-poppins xl:max-w-6xl lg:max-w-[980px] md:max-w-3xl m-auto relative bg-white">

      
        <NavBar/>
        <Header/>
    
      <Formulario/>
     
        <Section/>

      
    </div>
    
  )
}

export default App
