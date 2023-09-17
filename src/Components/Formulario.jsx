import { useState } from "react"
import { useEffect } from "react"

import bg from '../assets/images/bg-shorten-mobile.svg'
import bgDesk from '../assets/images/bg-shorten-desktop.svg'
const Formulario = () => {

    const [links, setLinks]= useState()
const [URL, setURL] = useState('')
console.log(URL)

const shorten = e => {

  e.preventDefault()
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


    <div className="bg-DarkBlue w-full p-6 rounded-xl relative z-10 overflow-hidden lg:p-12  ">
      <img src={bg} alt="bg" className="absolute top-0 -right-2 z-0 rounded-e-xl lg:hidden" />
      <img src={bgDesk} alt="bgDesktop" className="absolute top-0 left-0 w-full z-0 rounded-e-xl hidden lg:block" />
        <form action=""  onSubmit={shorten} className="flex flex-col justify-center items-center gap-3 z-20 relative  lg:flex-row ">
            <input type="text" name="url" placeholder="Shorten a link here..." className="w-full rounded-md h-12 p-3 lg:w-3/4"/>
            <button type="submit" className='px-9 py-3 w-full  font-bold bg-cyan text-white rounded-md  lg:w-1/4 ' > Shorten It!</button>
        </form>
                
        <a href={URL} target="_blank" rel="noopener noreferrer">{links && links.full_short_link}</a>
                
                
    </div>
  )
}

export default Formulario