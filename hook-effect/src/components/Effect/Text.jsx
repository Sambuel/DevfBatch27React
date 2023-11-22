import { useEffect, useState } from "react"
const Text = () => {
    const [text, setText] = useState("")
    
    useEffect(() => {
      
    }, )
    

  return (
    <div>
    <input 
    type="text"
    placeholder="Modifica el texto de abajo"
    onChange={(event) => setText(event.target.value)} // el .target hace que afecte al todo el input y el value para que nos muestre el valor de los inputs 
    />
    <h1>{text}</h1>
    </div>
  )
}

export default Text
