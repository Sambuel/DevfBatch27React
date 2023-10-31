// SE UTILIZA PARA CREAR UN NUEVO ARREGLO APARTIR DE OTRO , APLICANDO UNA FUNCION A CADA ELEMENTO DEL ARREGLO ORIGINAL 


const numeros = [1,2,3,4,5]

const numeroDuplicados = numeros.map(numero => {
    // otros codigos...
    return numero *2
});

console.log("arreglo original ", numeros);
console.log("copia del arreglo original ",numeroDuplicados);