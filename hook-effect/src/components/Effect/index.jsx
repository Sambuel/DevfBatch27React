import { useState } from "react"
import Text from "./Text"

const Effect = () => {
    const [showText, setShowText] = useState(false)
    return (
      <div>
        <button onClick={() => setShowText(!showText)}>
            Show Text
        </button>


        {showText && <Text />}
      </div>
    )
  }
  
  export default Effect

  // PARA ENTENDER EL useEffect , HAY QUE CONOCER EL CICLO DE VIDA DE UN COMPONENTE DE REACT 
  // CICLO DE VIDA DE UN COMPONENTE EN REACT 
  // 1. Mounting state = ESTADO EN EL QUE SE MONTA EL COMPONENTE
  // 2. Updating state = ESATDO EN EL QUE SE ACTUALIZA EL COMPONENTE
  // 3. Unmonting state = ESTADO EN EL QUE SE DESMONTA EL COMPONENTE