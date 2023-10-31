// - SE UTILZA PRA ITERAR SOBRE ELEMENTOS DE UN ARREGLO Y EJECUT7AR UNA FUNCION PARA CADA ELEMENTO

// - NO DEVUELVE UN NUEVO ARREGLO. TRABAJA SOBRE EL ORIGINAL

const frutas = ["Manzana","Pera","Platano"]

frutas.forEach(fruta => {   // ForEach = Para cada 
    console.log(fruta);
});

// EJEMPLO CON UNA FUNCION CLASICA 
frutas.forEach(function (fruta){
    console.log(fruta);
});
