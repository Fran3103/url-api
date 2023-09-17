import logo from '../assets/images/logocopy.svg'
import face from '../assets/images/icon-facebook.svg'
import insta from '../assets/images/icon-instagram.svg'
import pint from '../assets/images/icon-pinterest.svg'
import tw from '../assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className="max-w-screen  m-auto text-center bg-DarkViolet mb-5 py-16">
        <div className='max-w-[1120px] m-auto text-center  mb-5 py-16 lg:grid lg:grid-cols-3 lg:place-content-start'>

            <img src={logo} alt="logo" className='m-auto mb-5 fill-white lg:grid-span-1 lg:mb-0 lg:mt-4 lg:m-0' />
            <div className='lg:w-[800px]'>
                <ul className='flex flex-col gap-4 lg:flex-row lg:gap-16 lg:m-0'>
                    <li className='my-4 text-white lg:text-left'> Features
                        <ul className='flex flex-col gap-3 mt-5 text-Grays text-sm lg:text-left'>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>

                        </ul>
                    </li>
                    <li className='my-4 text-white lg:text-left'>Resoures 
                        <ul className='flex flex-col gap-3 mt-5 text-Grays text-sm lg:text-left'>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </li>
                    <li className='my-4 text-white lg:text-left'>Company 
                        <ul className='flex flex-col gap-3 mt-5 text-Grays text-sm lg:text-left'>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            <div className='flex my-5 gap-6 justify-center mt-9 lg:mt-4 ' >
                    <img src={face} alt="face"  className='lg:w-5 lg:h-5'/>
                    <img src={tw} alt="tw" className='lg:w-5 lg:h-5'/>
                    <img src={pint} alt="pinterest" className='lg:w-5 lg:h-5'/>
                    <img src={insta} alt="instagram" className='lg:w-5 lg:h-5'/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center ">
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer '>Frontend Mentor </a> . </p>
       <p> Coded by <a className='text-blue-500 cursor-pointer' href="https://www.linkedin.com/in/franco-aguirre-24855012a" target="_blank" rel='noreferrer  '>Franco Aguirre</a> .</p>
        </div> 
    </div>
  )
}

export default Footer