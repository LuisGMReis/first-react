import React, {useState} from "react";

import { Button } from "./components/button"

function App() {

    const [contador,setContador] = useState(0)

    function adcionar () {
      setContador(contador + 1)
    }

    function diminuir () {
      setContador(contador - 1)
    }

  return (
    <div className="m-12">
      <div className="flex items-center gap-3">
        <Button title="+" onClick={adcionar}/>
        <p>{contador}</p>
        <Button title="-" onClick={diminuir}/>
        
      </div>
    
    </div>
  )
}

export default App;