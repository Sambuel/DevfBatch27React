// CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVARLE UN HELADO A UN AMIGO SI LA HELADERIA ESTA ABIERTA 

let heladeriaAbierta = true 
// FORMAS DE USAR PROMESAS 
// 1. CREAR LAS REGLAS DE LA PROMESA . ( NOS PUEDE TOCAR HACERLO O NO )

const traerHelado = new Promise(function(resolve,reject) { 
    // LOGICA DE LA PROMESA 
    if (heladeriaAbierta) {
        resolve("Ten , te traje un helado por que estaba abierta la heladeria")
    }else{
        reject("no te traje el helado,  por que no estaba abierta ")
    }
})

// 2. RECIBIR UNA PROMESA COMO RESPUESTA 
traerHelado.then(function (response) { // metodo then : entonces (traduccion)
    // CODIGO ...
    console.log(response);
}).catch(function (error) { // catch : atrapar 
    console.error("heladeria bonita " + error);
})







