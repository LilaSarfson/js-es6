

// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad >= 18) {
    let puedesPasar = false;
}

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
//Por que la actulización de la variable puedesPasar sólo tiene valor dentro del if, en cambio, el puedesPasar = true es una variable global accesible desde cualquier parte del fichero.
