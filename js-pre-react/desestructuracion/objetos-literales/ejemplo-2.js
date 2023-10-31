// DARLE UN ALIAS/SOBRE NOMBRE A LAS PROPIEDADES QUE SE DESESTRUCTURAN


const persona = {
    nombre:"cinthyia",
    edad: 20 ,
    ciudad : "La mejor ciudad"
}

const nombre = "Laura"

// DESESTRUCTURAR EL "nombre"
let {nombre: nombreCompleto} = persona // sobreNombre

console.log(nombreCompleto);

/* Este código utiliza una asignación desestructurante para extraer el valor de la propiedad `nombre` del objeto `persona` y asígnalo a una nueva variable `nombreCompleto`. El `nombre: nombreCompleto`la sintaxis es darle un alias o un nuevo nombre (`nombreCompleto`) a la propiedad que se está desestructurando
(`nombre`). Finalmente, el código registra el valor de `nombreCompleto` en la consola. */
