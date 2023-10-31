// DESESTRUCTURACION DE OBJETOS CON PARAMETROS DE FUNCIONES ( esto se ocupa mas en react)
function imprimirInformacon({nombre,edad}) { 
    console.log(`nombre : ${nombre}, Edad : ${edad}`);
}
// los corchetes que estan adentro hacen que pase como parametro un objeto que seria el objeto persona 
// En JavaScript, cuando usas corchetes {} dentro de la lista de parámetros de una función, estás usando una característica llamada "desestructuración de objetos". Esta característica te permite extraer propiedades específicas de un objeto y usarlas como variables individuales dentro de la función
const persona = {
    nombre : "samuel",
    edad : 15 ,
    ciudad : "ragnarok"
}

imprimirInformacon(persona)

// en este caso estamos pasando un objeto como parametro a la funcion "imprimir informacion", y luego desestructuramos el objeto directamente en los parametros de la funcion para acceder a las propiedades dentro de la funcion