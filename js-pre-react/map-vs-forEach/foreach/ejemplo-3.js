// UTILIZAR FOREACH , PARA REALIXAR OPERACION MATEMATICA CON OS VALORES DE UN ARREGLO

const valores = [10,20,30,40,50]

let suma = 0 
valores.forEach(valor => {
    suma += valor
});

console.log(suma);