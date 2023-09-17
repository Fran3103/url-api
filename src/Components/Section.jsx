import img1 from '../assets/images/icon-brand-recognition.svg'
import img2 from '../assets/images/icon-detailed-records.svg'
import img3 from '../assets/images/icon-fully-customizable.svg'

const Section = () => {
  return (
    <div className='w-full'>

        <div className='w-full text-center mt-12 flex flex-col gap-6  bg-Grays  '>
            <div >
                <h2 className='text-3xl text-darkViolet font-bold mb-3 mt-12'>Advanced Statistics</h2>
                <p className='text-md text-GrayiViolet md:w-[470px] md:m-auto mx-4 mt-6'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='md:flex md:gap-7 md:justify-center  relative '>
                <div className='flex flex-col justify-center items-center gap-4 bg-white  mt-16 md:text-left relative  md:items-start md:w-[320px] md:h-48 md:z-20 md:mt-0 md:[400px] md:p-3 rounded-lg'>
                    <div className='bg-darkViolet -mt-16 w-20 h-20  p-4 rounded-full md:absolute md:top-6 md:left-6 relative  md:w-16 md:h-16 '>
                        <img className='m-auto' src={img1} alt="Brand" />
                    </div>
                    <h3 className='text-2xl text-DarkBlue font-semibold md:text-lg '>Brand Recognition</h3>
                    <p className='text-Grays mx-2 md:text-[12px] '>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                
                </div>

                
                
                <div className='w-2 h-96 hidden absolute top-72 left-56  bg-cyan m-auto -mb-12 md:w-full md:max-w-4xl md:h-2 md:top-36  md:left-0 lg:left-[52px] md:block ' ></div>

                <div className='flex flex-col justify-center items-center gap-4 bg-white  mt-16 md:text-left relative  md:items-start md:w-[320px] md:h-48 md:z-20 md:mt-16 md:[400px] md:p-3 rounded-lg'>
                    <div  className='bg-darkViolet -mt-16 w-20 h-20  p-4 rounded-full md:absolute md:top-6 md:left-6 relative  md:w-16 md:h-16 '>
                        <img className='m-auto ' src={img2} alt="detailed" />
                        <div className='w-2 h-10 absolute -top-10 left-9   z-0 bg-cyan   md:hidden ' ></div>
                    </div>
                    <h3 className='text-2xl text-DarkBlue font-semibold md:text-lg '>Detailed Records</h3>
                    <p className='text-Grays mx-2 md:text-[12px] '>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    
                </div>

                

                <div className='flex flex-col justify-center items-center gap-4 bg-white  mt-16 md:text-left relative  md:items-start md:w-[320px] md:h-48 md:z-20 md:mt-32 md:[400px] md:p-3 rounded-lg'>
                    <div  className='bg-darkViolet -mt-16 w-20 h-20  p-4 rounded-full md:absolute md:top-6 md:left-6 relative  md:w-16 md:h-16 '>
                        <img className='m-auto' src={img3} alt="fully" />
                        <div className='w-2 h-10 absolute -top-10 left-9   z-0 bg-cyan   md:hidden ' ></div>
                    </div>
                    <h3 className='text-2xl text-DarkBlue font-semibold md:text-lg'>Fully Customizable</h3>
                    <p className='text-Grays mx-2 md:text-[12px]  '>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section