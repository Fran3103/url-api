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
                <div className= {hidden ?'rounded-xl w-full  text-white/80 font-bold px-6 bg-darkViolet text-center text-xl  py-9 gap-4 absolute top-16  left-0 flex flex-col duration-[800ms]  transition-all ease-in-out': 'rounded-xl w-full  text-Grays bold px-6 bg-darkViolet text-center text-2xl  py-9 gap-4 absolute -left-[800px] top-16  flex flex-col duration-[1000ms]  transition-all ease-in-out'  }>
                    <nav className='flex flex-col gap-7' >
                            <ul>
                                <li className='hover:text-gray-400 duration-150'>
                                    <a href='/' >Features</a>
                                </li>
                            </ul>
                            <ul>
                                <li className='hover:text-gray-400 duration-150'>
                                    <a href='/'>Pricing</a>
                                </li>
                            </ul>
                            <ul>
                                <li className='hover:text-gray-400  duration-150'>
                                    <a href='/'>Resources</a>
                                </li>
                            </ul>
                                
                        </nav>  
                        <hr className='my-2'/>
                        <nav className='flex flex-col gap-7'>
                            <ul>
                                <li className='hover:text-gray-400  duration-150'>
                                    <a href='/' >Login</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <button className='bg-cyan p-3  w-full rounded-3xl  duration-300 text-white hover:bg-sky-400 hover:text-sky-100'>Sing Up</button>
                                </li>
                            </ul>
                        </nav>
            </div>
        </div>
        <div className='hidden md:flex justify-between items-center text-GrayiViolet'>
            <div>
                    <nav className='flex gap-6 items-center'>
                            <img src={logo} alt="logo" />
                            <ul>
                                <li>
                                    <a href='/' className='hover:text-Grays duration-300'>Features</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href='/' className='hover:text-Grays duration-300'>Pricing</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href='/' className='hover:text-Grays duration-300'>Resources</a>
                                </li>
                            </ul>
                                
                    </nav>  
                        
                    
            </div>
            <nav  className='flex gap-6 items-center'>
                    <ul>
                        <li>
                            <a href='/' className='hover:text-Grays duration-300'>Login</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button className='px-4 py-2 bg-cyan text-white rounded-3xl'>Sing Up</button>
                        </li>        
                    </ul>
            </nav>   

        </div>
    </div>
  )
}

export default NavBar