import Formulario  from "./Components/Formulario"
import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import Section from "./Components/Section"





function App() {



 


  return (
    <>
    <div className=" p-4 pt-9 w-screen font-poppins xl:max-w-6xl lg:max-w-[980px] md:max-w-3xl m-auto relative bg-white">

      
        <NavBar/>
        <Header/>
    
      <Formulario/>
     
        <Section/>

      
    </div>
    <div className="w-screen max-w-[1440px]  bg-darkViolet  text-center m-auto relative p-12 bg-[url('../src/assets/images/bg-boost-mobile.svg')] bg-no-repeat bg-right   md:bg-[url('../src/assets/images/bg-boost-desktop.svg')] md:bg-center"  >
     
      
        <p className="text-2xl text-white mb-4 md:text-4xl font-bold  mt-2">Boost your links today</p>
        <button className='px-9 py-3 my-3 font-bold bg-cyan text-white rounded-3xl '>Get Started</button>
      </div>
 
    </>
    
  )
}

export default App
