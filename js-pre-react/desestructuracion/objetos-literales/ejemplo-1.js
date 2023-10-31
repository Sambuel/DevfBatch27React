// LA DESESTRUCTURACION DE OBJETOS LITERALES EN JS , TE PERMITE EXTRAER PROPIEDADES DE UN OBJETO Y ASIGNARLAS A VARIABLES/CONSTANTES INDIVIDUALES DE MANERA MAS CONVENIENTE 


const persona = {
    nombre:"cinthyia",
    edad: 20 ,
    ciudad : "La mejor ciudad"
}

// DESESTRUCTURACION 
let {nombre,edad,ciudad} = persona
    
console.log(nombre);

// OTRA FORMA PARA SOLO IMPRIMIR UN SOLO VALOR

// let {nombre} = persona

// console.log(nombre);