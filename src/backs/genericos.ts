import { printObject, genericFuntion, genericArrow } from "../generic/generic";
import { Hero, Villano } from '../interfaces'

// llamado de los genéricos

printObject('Hola')
const nombre: string = 'Cristian'

console.log(printObject(nombre).toUpperCase()) // no me da la ayuda
console.log(genericFuntion(nombre).toUpperCase()) // me detecta que es un string y me da la ayuda
console.log(genericArrow(nombre).toUpperCase())

console.log(printObject(1.1124424).toFixed(2)) // no me da la ayuda
console.log(genericArrow(1.1124424).toFixed(2)) // detecta que es un número y me da la ayuda


const deadpool = {
    name: 'Deadpool',
    realName: 'Pepito Perez',
    power: 150
}

console.log(genericFuntion<Hero>(deadpool).name) // puedo hacer que la función sea del tipo de la interfaz Hero, me ayuda con las propiedades del tipo Hero
console.log(genericFuntion<Villano>(deadpool).power) // aquí con las de tipo villano