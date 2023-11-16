import { useState } from "react"
import ToDoItem from "./ToDoItem";

const ToDolist = () => {
const [inputValue, setInputValue] = useState("")
const [tareas,setTareas] = useState([])

const handleAdd = () => {
  if (inputValue.trim()) {
    setTareas([...tareas, inputValue]); // Corregir aquí
    setInputValue("");
  }
};


const handleDelete = (indiceTarea) => {
setTareas(tareas.filter((tarea,indice)=> indice !== indiceTarea))
}

// console.log([1,2,3,4].filter((numero)=>numero <3));  -->    // el metodo filter tiene una condicion por ejemplo este console.log solo imprimio los numero menores a 3 poniendolos a en un nuevo arreglo 

// console.log([1,2,3,4].map((numero)=>numero + 1));

  return (
    <div>
         <h1>Lista de Tareas</h1>
         <input 
         type="text"
        value={inputValue}
        onChange={(evento)=> setInputValue(evento.target.value)}  
        />
        <button 
        className="add-button"
        onClick={handleAdd}
        >
          Agregar
            </button>
        <ul>
        {tareas.map((tarea,indice)=>(
          <ToDoItem todo={tarea}handleDelete={(e) => handleDelete(indice)} key={indice}/>
        ))}
        </ul>          
    </div>
  )
}

export default ToDolist