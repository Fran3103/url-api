import { useState } from 'react';
import logo from '../../public/images/logo.svg'
import { AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {


    const[hidden,setHidden] = useState(true)

    const click = () => setHidden(!hidden)


  return (
    <div>
        <div className='flex flex-col  items-center justify-between px-3 md:hidden relative '>
            <div className='flex items-center justify-between w-full mb-5'>
            <img src={logo} alt="logo" />
           <AiOutlineMenu className='w-6 h-6 cursor-pointer' onClick={click}/>
            </div>
            <div className= {hidden ?'rounded-xl w-full  text-Grays bold px-6 bg-darkViolet text-center text-2xl  py-9 gap-4 absolute top-16  left-0 flex flex-col duration-[800ms]  transition-all ease-in-out': 'rounded-xl w-full  text-Grays bold px-6 bg-darkViolet text-center text-2xl  py-9 gap-4 absolute -left-[400px] top-16  flex flex-col duration-500  transition-all ease-in-out'  }>
                <nav className='flex flex-col gap-5' >
                        <ul>
                            <li className='hover:text-gray-400 cursor-pointer duration-150'>
                                <p >Features</p>
                            </li>
                        </ul>
                        <ul>
                            <li className='hover:text-gray-400 cursor-pointer duration-150'>
                                <p>Pricing</p>
                            </li>
                        </ul>
                        <ul>
                            <li className='hover:text-gray-400 cursor-pointer duration-150'>
                                <p>Resources</p>
                            </li>
                        </ul>
                            
                    </nav>  
                    <hr className='my-2'/>
                    <nav className='flex flex-col gap-5'>
                        <ul>
                            <li className='hover:text-gray-400 cursor-pointer duration-150'>
                                <p >Login</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p className='bg-cyan p-3 py-2 rounded-3xl cursor-pointer duration-300 text-white hover:bg-sky-400 hover:text-sky-100'>Sing Up</p>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
        <div className='hidden md:flex justify-between items-center'>
            <div>
                <img src={logo} alt="logo" />
                <nav>
                        <ul>
                            <li>
                                <p>Features</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Pricing</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Resources</p>
                            </li>
                        </ul>
                            
                </nav>  
                    
                  
            </div>
            <nav>
                <ul>
                    <li>
                        <p>Login</p>
                    </li>
                </ul>
                <ul>
                     <li>
                        <p>Sing Up</p>
                    </li>        
                </ul>
            </nav>   

        </div>
    </div>
  )
}

export default NavBar