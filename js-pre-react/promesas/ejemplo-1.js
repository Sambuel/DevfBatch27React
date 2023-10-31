// EN JAVASCRIPT,  LAS PROMESAS SON OBJECTOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE EN UN TIEMPO INDEFINIDO POR NATURALEZA SON ASINCRONAS 

// 1.  CREAR LA ESTRUCTURA DE UNA PROMESA 
const promesa = new promise(function (resolve , reject ) {
   // LAS PROMESAS CONTIENEN DOS METODOS 
    resolve()
    reject()
})

// 2. CONSUMIR LA PROMESA 
promesa.then(function(response) {
    // codigo ...
    console.log(response);
}).catch(function (error) {
    console.error(error)
})


console.warn("hola")