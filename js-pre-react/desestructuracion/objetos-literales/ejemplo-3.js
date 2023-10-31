// DEFINIR VALORES POR DEFECTO 

const persona = {
    nombre:"cinthyia",
    edad: undefined ,
    ciudad : "La mejor ciudad"
}

let {edad = 30 } = persona

console.log(edad);