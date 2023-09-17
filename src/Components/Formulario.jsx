import { useState } from "react"
import { useEffect } from "react"


import bg from '../assets/images/bg-shorten-mobile.svg'
import bgDesk from '../assets/images/bg-shorten-desktop.svg'
import CopyToClipboard from "react-copy-to-clipboard"

const Formulario = () => {

    const [links, setLinks]= useState()
const [URL, setURL] = useState('')
const [Copied , setCopied]= useState(true)

const [error, setError]= useState(false) 
const copy = ()=> setCopied(false)
console.log(URL)

const shorten = e => {

  e.preventDefault()
  
  if(e.target.url.value.length === 0){
    setError(!error)
    console.log('vacio')
  }
  console.log(e.target.url.value)
  const nuevoURL = e.target.url.value
  setURL(nuevoURL)
}


 useEffect(() => {
   fetch(`https://api.shrtco.de/v2/shorten?url=${URL}`)
    .then((resp) => resp.json())
    .then(data => setLinks(data.result) )
    .catch(console.error);
 }, [URL])
  return (

    <div className="w-full relative">

        <div className="bg-DarkBlue w-full p-6 rounded-xl relative z-10 overflow-hidden lg:p-12  ">
          <img src={bg} alt="bg" className="absolute top-0 -right-2 z-0 rounded-e-xl lg:hidden" />
          <img src={bgDesk} alt="bgDesktop" className="absolute top-0 left-0 w-full z-0 rounded-e-xl hidden lg:block" />

            <form  onSubmit={shorten} className="flex flex-col justify-center items-center gap-3 z-20 relative  lg:flex-row border-red-600">
                <input type="text" name="url"  placeholder="Shorten a link here..." className={error ? 'w-full rounded-md h-12 p-3 lg:w-3/4 border-red-600' : "w-full rounded-md h-12 p-3 lg:w-3/4 "}/>
              
                <p className={error ? 'mt-2 text-red-900 text-left': 'hidden'}>Please add a link</p>
                <button type="submit" className='px-9 py-3 w-full  font-bold bg-cyan text-white rounded-md  lg:w-1/4 ' > Shorten It!</button>
                    
            </form>
            </div>
          { links &&
              
             <div className="bg-white w-full flex flex-col md:flex-row md:justify-between md:items-center mt-7 absolute p-4 rounded-lg">
              <p className="text-DarkBlue  ">{URL}</p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0">
                <p className="text-cyan text-left ">{links.short_link}</p>
                <CopyToClipboard text={links.short_link}>

              <button className={`${Copied  ? 'px-6 py-2 my-2 w-full  font-bold bg-cyan text-white rounded-xl ' : 'px-6 py-2 my-2 w-full  font-bold bg-darkViolet text-white rounded-xl '}`}  onClick={copy}>{Copied ? 'Copy': 'Copied!'}</button>
                </CopyToClipboard>
              </div>
            </div>
          } 
      </div>
  )
}

export default Formulario