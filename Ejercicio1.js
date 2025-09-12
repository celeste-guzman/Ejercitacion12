//Ejercicio 1: While 
//Crea un programa que solicite al usuario ingresar números continuamente 
//hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
//de todos los números ingresados. 

let suma = 0;
let numero = parseInt(prompt("Ingrese un número:"));

while (numero >= 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese otro número:"));
}

console.log("La suma de todos los números ingresados es: " + suma);
