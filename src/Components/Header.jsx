import img from '../assets/images/illustration-working.svg'

const Header = () => {
  return (
    <div className='w-full  m-auto mt-1 flex flex-col justify-center items-center md:flex  md:justify-between md:items-start  '>
        <img src={img} alt="img" className='max-w-xl  md:-right-0 top-16 md:w-[40%] w-full lg:w-[45%] lg:top-44 sm:w-full md:top-40   relative md:absolute m-auto z-0'  />
    
        <div className='flex flex-col justify-center items-center px-4  gap-4 md:px-0 max-w-lg md:items-start mb-24 lg:gap-7 mt-36 md:mt-24 sm:mt-48 lg:mb-32 lg:mt-36'>
          <h1 className='text-4xl  text-center font-semibold text-DarkBlue  md:text-left md:mt-3 md:mr-[140px] lg:mr-0 lg:text-6xl'>More than just shorter links</h1>
          <p className='text-lg text-GrayiViolet  text-center md:text-left  md:mr-6 lg:mr-0 lg:text-xl'> Build your brand’s recognition and get detailed insights  on how your links are performing.</p>
          <button className='px-9 py-3 my-3 font-bold bg-cyan text-white rounded-3xl  '>Get Started</button>
          
        </div>
    </div>
  )
}

export default Header