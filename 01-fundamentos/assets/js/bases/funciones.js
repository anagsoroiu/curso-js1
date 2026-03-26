function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2, 3, 4, 5];

    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar('Ana', 20, false, 'España');
console.log(retornoSaludar[0], retornoSaludar[1]);

// saludar2('Ana');
// saludarFlecha2('Ana');

function sumar(a,b) {
    return a + b;
}

const sumar2 = (a, b) => a + b;

console.log(sumar2(1, 2));

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());