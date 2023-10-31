// CREAR UN ARREGLO DE LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO 
const palabras = ["Linterna","Llanta"]

// SALIDA ESPERADA / EXPECTED OUTPUT : [8,6]

const letras = palabras.map(letra => {
    return letra.length
});


console.log("arreglo original sin cambios", palabras);
console.log("arreglo nuevo con el numero de palabras ",letras);