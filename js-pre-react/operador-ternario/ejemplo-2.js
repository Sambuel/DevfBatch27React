// EN BASE A "esDiaLaborable", DEFINIR SI "nos sabemos la de chambear" | trabajar o descansar 

const esDiaLaborable = true

// EXPECTED OUTPUT/SALIDA ESPERADA EN LA CONSOLA :"trabajar o Descansar"
const actividad = (esDiaLaborable === true ) ? "Trabajar " : "Descansar"

console.log(actividad);

// NOTA : INVESTIGAR VALORES TRUTHY Y FALSY 
// Solo hay seis valores falsos/"falsy" en JavaScript: undefined , null , NaN , 0 , "" (cadena vacía), y false por supuesto.