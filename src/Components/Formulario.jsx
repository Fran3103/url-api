import { useState } from "react"
import { useEffect } from "react"


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


    <div>
        <form action=""  onSubmit={shorten}>
            <input type="text" name="url" placeholder="Ingrese url"/>
            <button type="submit"  >Enviar</button>
        </form>
                
        <a href={URL} target="_blank" rel="noopener noreferrer">{links && links.full_short_link}</a>
                
                
    </div>
  )
}

export default Formulario