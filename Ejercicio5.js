//Ejercicio 5: Uso de Arrays y Condicionales 
//Crea un programa que solicite al usuario ingresar 5 nombres y los 
//almacene en un array. Luego, solicita al usuario ingresar un nombre y 
//verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
//pasos el código si eso les facilita su desarrollo) 

let nombres = [];

for (let i = 0; i < 5; i++){
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre);
}

let buscar = prompt('Ingrese un nombre para verificar si está en la lista: ');

if (nombres.includes(buscar)) {
    console.log(`El nombre "${buscar}" SÍ está en la lista.`);
} else{
    console.log(`El nombre "${buscar}" NO está en la lista.`);
}