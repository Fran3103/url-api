import img from '../assets/images/illustration-working.svg'

const Header = () => {
  return (
    <div className='w-full m-auto mt-16 flex flex-col justify-center items-center lg:flex  lg:justify-between lg:items-start '>
        <img src={img} alt="img" className='max-w-xl  lg:absolute lg:-right-32 top-36 '  />
    
        <div className='flex flex-col justify-center items-center px-4 mt-4 gap-4 lg:px-0 max-w-lg lg:items-start lg:gap-7  '>
          <h1 className='text-5xl mx-4 text-center font-semibold text-DarkViolet  lg:text-left lg:mt-8 lg:mx-0'>More than just shorter links</h1>
          <p className='text-lg text-GrayiViolet mx-4 text-center lg:text-left  lg:mx-0'> Build your brand’s recognition and get detailed insights  on how your links are performing.</p>
          <button className='px-9 py-3 my-3 font-bold bg-cyan text-white rounded-3xl  '>Get Started</button>
          
        </div>
    </div>
  )
}

export default Header