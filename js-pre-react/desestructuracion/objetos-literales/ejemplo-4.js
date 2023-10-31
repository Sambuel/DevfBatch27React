// DESESTRUCTURACION ANIDADA / DESESTRUCTURAR OBJETOS ADENTRO DE OBJETOS

const persona = {
    nombre:undefined,
    edad: 20 ,
    ciudad : "La mejor ciudad",
    direccion:{
        calle: "123 calle principal ",
        colonia : "colonia bonita"
    }
}

// DESESTRUCTURACION ANIDADA
const {nombre = "luna", direccion:{calle}} = persona // poniendo direccion adentro del const hace que desestructuremos direccion y depues con los dos puntos y los corchetes que esta dentro calle desestructuramos (calle) y ya aparece el valor 
console.log(calle);




/* El código está usando una asignación desestructurante para extraer los valores de `nombre` y `calle`
propiedades del objeto `persona`. */