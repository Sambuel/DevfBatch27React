// EN JAVASCRIPT,  LAS PROMESAS SON OBJECTOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE EN UN TIEMPO INDEFINIDO POR NATURALEZA SON ASINCRONAS 

// 1.  CREAR LA ESTRUCTURA DE UNA PROMESA 
const promesa = new promise(function (resolve , reject ) {
   // LAS PROMESAS CONTIENEN DOS METODOS 
    resolve() // metodo  para poder devolver un valor cuando la promesa se cumple  
    reject() // metodo  devuelve un valor cuando la promesa se rechaza 
})

// 2. CONSUMIR LA PROMESA 
promesa.then(function(response) { // metodo then se utiliza para esperar respuesta exitosa 
    // codigo ...
    console.log(response);
}).catch(function (error) { // para capturar con una funcion anonima el error que se esta lanzando 
    console.error(error)
})


console.warn("hola")