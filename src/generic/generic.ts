// funciones genericas... en si, todas las funciones son genericas en JS
// si agrego el tipo any a una función, puedo tener problemas con los undefined
// los generic, me toman un tipo de dato y dan como salida el mismo, ayudandome a detectar el tipo de dato

// Función normal

export const printObject = (parametro: any) => {
    return parametro
}

// generic 

export function genericFuntion<T>(parametro: T): T {
    return parametro
}

export const genericArrow = <T>(parametro: T) => parametro