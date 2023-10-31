// CONVERTIR UN ARREGLO DE NOMBRES EN UN ARREGLO DE SALUDOS 

const nombres = ["juan","maria","Lucia"]

const saludos = nombres.map(nombre=> {
    return `hola ${nombre}`
});

console.log("arreglo de nombres ", nombres);
console.log("arreglo de saludos ", saludos);